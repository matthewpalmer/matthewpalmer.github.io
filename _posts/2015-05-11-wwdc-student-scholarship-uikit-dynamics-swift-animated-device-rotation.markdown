---
title: "UIKit Dynamics, Swift, and Falling Blocks"
layout: post
category: ios
---

This year, I entered the WWDC 2015 Scholarships competition. I didn't win, but there were a couple of interesting parts of my app that I thought were still worth sharing.

My design centred around rising and falling blocks that represented the different parts of my life. These blocks had mass and density and elasticity, and they responded in a lively way. And, like little blocks in a glass case, I wanted them to fall away when the device rotated.

![demo of animated uiview responding to device rotation][demo2]

I tried doing this by animating blocks from one side of the device to the other, but it just didn't feel right. The blocks needed to be physical. I needed a physics engine: UIKit Dynamics.

The first step to this is to get the blocks falling down the device in a realistic way. The second step is to listen for device orientation changes, and update our blocks in response to these changes.

*Skip to the end if you want to see the code in its entirety.*

We set up a new empty view, and add a green and an orange block.

{% highlight swift %}
lazy var greenBlock: UIView = {
    let view = UIView(frame: CGRect(x: 50.0, y: 50.0, width: 100.0, height: 100.0))
    view.backgroundColor = UIColor.greenColor()
    return view
}()

lazy var orangeBlock: UIView = {
    let view = UIView(frame: CGRect(x: 125.0, y: 190.0, width: 50.0, height: 50.0))
    view.backgroundColor = UIColor.orangeColor()
    return view
}()
{% endhighlight %}

We also add a `UIDynamicAnimator`, which controls the physics for the system. We add a `UIGravityBehavior`, for replicating gravity, and collisions and elasticity between the items.

{% highlight swift %}
// Animator for all of the components
var itemsAnimator: UIDynamicAnimator?

// Gravity for the system
var gravityBehavior: UIGravityBehavior?

// Collisions
var boundaryCollisionBehavior: UICollisionBehavior?

// Elasticity
var elasticityBehavior: UIDynamicItemBehavior?
{% endhighlight %}

Then we need to add all of these components to our master animator, and tweak the the elasticity of the blocks so they're more bouncy.

{% highlight swift %}
// Our master item animator
itemsAnimator = UIDynamicAnimator(referenceView: view)

// The gravity for our system
gravityBehavior = UIGravityBehavior(items: blocks)

// The collision between our items, and with the boundary of the containing view
boundaryCollisionBehavior = UICollisionBehavior(items: blocks)
boundaryCollisionBehavior?.translatesReferenceBoundsIntoBoundary = true

// The elasticity for the blocks
elasticityBehavior = UIDynamicItemBehavior(items: blocks)
elasticityBehavior?.elasticity = 0.6

// Add everything
itemsAnimator?.addBehavior(gravityBehavior)
itemsAnimator?.addBehavior(boundaryCollisionBehavior)
itemsAnimator?.addBehavior(elasticityBehavior)
{% endhighlight %}

At this stage, our view controller will be something like (`regularGravityVector` and `invertedGravityVector` are not needed yet, but will be useful later).

{% highlight swift %}
class ViewController: UIViewController {
    // MARK: - Blocks
    
    // Our block
    lazy var greenBlock: UIView = {
        let view = UIView(frame: CGRect(x: 50.0, y: 50.0, width: 100.0, height: 100.0))
        view.backgroundColor = UIColor.greenColor()
        return view
    }()
    
    lazy var orangeBlock: UIView = {
        let view = UIView(frame: CGRect(x: 125.0, y: 190.0, width: 50.0, height: 50.0))
        view.backgroundColor = UIColor.orangeColor()
        return view
    }()
    
    
    // MARK: - Dynamics properties
    // Animator for all of the components
    var itemsAnimator: UIDynamicAnimator?
    
    // Gravity for the system
    var gravityBehavior: UIGravityBehavior?
    
    lazy var regularGravityVector: CGVector = {
        CGVector(dx: 0, dy: 1.0)
    }()
    
    lazy var invertedGravityVector: CGVector = {
        CGVector(dx: 0, dy: -1.0)
    }()
    
    // Collisions
    var boundaryCollisionBehavior: UICollisionBehavior?
    
    // Elasticity
    var elasticityBehavior: UIDynamicItemBehavior?
    
    // MARK: - View lifecycle
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Listen for orientation changes
        NSNotificationCenter.defaultCenter().addObserver(self, selector: "orientationChanged:", name: UIDeviceOrientationDidChangeNotification, object: UIDevice.currentDevice())
        
        // Add our blocks to the view
        view.addSubview(greenBlock)
        view.addSubview(orangeBlock)
        
        let blocks = [greenBlock, orangeBlock]
        
        // Our master item animator
        itemsAnimator = UIDynamicAnimator(referenceView: view)
        
        // The gravity for our system
        gravityBehavior = UIGravityBehavior(items: blocks)
        
        // The collision between our items, and with the boundary of the containing view
        boundaryCollisionBehavior = UICollisionBehavior(items: blocks)
        boundaryCollisionBehavior?.translatesReferenceBoundsIntoBoundary = true
        
        // The elasticity for the blocks
        elasticityBehavior = UIDynamicItemBehavior(items: blocks)
        elasticityBehavior?.elasticity = 0.6
        
        // Add everything
        itemsAnimator?.addBehavior(gravityBehavior)
        itemsAnimator?.addBehavior(boundaryCollisionBehavior)
        itemsAnimator?.addBehavior(elasticityBehavior)
    }
}
{% endhighlight %}

We can build and run our project, and see the cool falling-blocks effect.

![gravity simulation of falling blocks ios dynamics][demo1]

To achieve the cool effect of blocks-in-a-box, we wanted to be able to rotate the device and have the gravity flip around. This is super easy to implement, thanks to the setup we did earlier.

We listen for the device's orientation changes

{% highlight swift %}
NSNotificationCenter.defaultCenter().addObserver(self, selector: "orientationChanged:", name: UIDeviceOrientationDidChangeNotification, object: UIDevice.currentDevice())
{% endhighlight %}

and add our handling of the orientation changes

{% highlight swift %}
func orientationChanged(notification: NSNotification) {
    if let device = notification.object as? UIDevice {
        switch device.orientation {
        case .Portrait:
            portraitOrientationChange()
        case .PortraitUpsideDown:
            portraitUpsideDownOrientationChange()
        default:
            return
        }
    }
}
{% endhighlight %}

This will receive all of the orientation changes, and handle the portrait-to-upside-down changes. All that's left is to flip the gravity.

{% highlight swift %}
func portraitOrientationChange() {
    // Change gravity direction
    gravityBehavior?.gravityDirection = regularGravityVector
}

func portraitUpsideDownOrientationChange() {
    // Flip our gravity
    gravityBehavior?.gravityDirection = invertedGravityVector
}
{% endhighlight %}

Perfect! Now we get the falling blocks we wanted.

![demo of animated uiview responding to device rotation][demo2]

<br/>
<hr/>
<br/>

Putting it all together, we end up with something like

{% highlight swift %}
//
//  ViewController.swift
//  Blocks
//
//  Created by Matthew Palmer on 11/05/2015.
//  Copyright (c) 2015 Matthew Palmer. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    // MARK: - Blocks
    
    // Our block
    lazy var greenBlock: UIView = {
        let view = UIView(frame: CGRect(x: 50.0, y: 50.0, width: 100.0, height: 100.0))
        view.backgroundColor = UIColor.greenColor()
        return view
    }()
    
    lazy var orangeBlock: UIView = {
        let view = UIView(frame: CGRect(x: 125.0, y: 190.0, width: 50.0, height: 50.0))
        view.backgroundColor = UIColor.orangeColor()
        return view
    }()
    
    
    // MARK: - Dynamics properties
    // Animator for all of the components
    var itemsAnimator: UIDynamicAnimator?
    
    // Gravity for the system
    var gravityBehavior: UIGravityBehavior?
    
    lazy var regularGravityVector: CGVector = {
        CGVector(dx: 0, dy: 1.0)
    }()
    
    lazy var invertedGravityVector: CGVector = {
        CGVector(dx: 0, dy: -1.0)
    }()
    
    // Collisions
    var boundaryCollisionBehavior: UICollisionBehavior?
    
    // Elasticity
    var elasticityBehavior: UIDynamicItemBehavior?
    
    // MARK: - View lifecycle
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Listen for orientation changes
        NSNotificationCenter.defaultCenter().addObserver(self, selector: "orientationChanged:", name: UIDeviceOrientationDidChangeNotification, object: UIDevice.currentDevice())
        
        // Add our blocks to the view
        view.addSubview(greenBlock)
        view.addSubview(orangeBlock)
        
        let blocks = [greenBlock, orangeBlock]
        
        // Our master item animator
        itemsAnimator = UIDynamicAnimator(referenceView: view)
        
        // The gravity for our system
        gravityBehavior = UIGravityBehavior(items: blocks)
        
        // The collision between our items, and with the boundary of the containing view
        boundaryCollisionBehavior = UICollisionBehavior(items: blocks)
        boundaryCollisionBehavior?.translatesReferenceBoundsIntoBoundary = true
        
        // The elasticity for the blocks
        elasticityBehavior = UIDynamicItemBehavior(items: blocks)
        elasticityBehavior?.elasticity = 0.6
        
        // Add everything
        itemsAnimator?.addBehavior(gravityBehavior)
        itemsAnimator?.addBehavior(boundaryCollisionBehavior)
        itemsAnimator?.addBehavior(elasticityBehavior)
    }
    
    // MARK: - Orientation
    func orientationChanged(notification: NSNotification) {
        if let device = notification.object as? UIDevice {
            switch device.orientation {
            case .Portrait:
                portraitOrientationChange()
            case .PortraitUpsideDown:
                portraitUpsideDownOrientationChange()
            default:
                return
            }
        }
    }
    
    /**
    * This function handles the response when the device rotates into regular portrait orientation.
    */
    func portraitOrientationChange() {
        // Change gravity direction
        gravityBehavior?.gravityDirection = regularGravityVector
    }
    
    /**
    * This function handles the response when the device rotates into upside-down portrait orientation.
    */
    func portraitUpsideDownOrientationChange() {
        // Flip our gravity
        gravityBehavior?.gravityDirection = invertedGravityVector
    }

}
{% endhighlight %}

[demo1]: http://i.imgur.com/RAm46IN.gif
[demo2]: http://i.imgur.com/69OD4Nk.gif
