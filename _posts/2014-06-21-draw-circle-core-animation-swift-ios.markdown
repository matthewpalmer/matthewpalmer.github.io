---
layout: post
title: "How to Draw a Circle Using Core Animation in Swift"
category: ios
---

As part of an upcoming project, I've been playing around with drawing circular borders. I needed to find the most efficient way to programmatically draw these circles, since they'll be appearing in really long table views. If you have any suggestions, or this code doesn't work for you, [get in touch on Twitter](http://twitter.com/_matthewpalmer).

The following code will draw a thin, non-animated circular border around a view. (See below for drawing animated circles.)

```
override func drawRect(rect: CGRect)
{
  var startAngle: Float = 360.0
  var endAngle: Float = 0.0

  // Drawing code
  // Set the radius
  let strokeWidth = 1.0
  let radius = CGFloat((CGFloat(self.frame.size.width) - CGFloat(strokeWidth)) / 2)

  // Get the context
  var context = UIGraphicsGetCurrentContext()

  // Find the middle of the circle
  let center = CGPointMake(self.frame.size.width / 2, self.frame.size.height / 2)

  // Set the stroke color
  CGContextSetStrokeColorWithColor(context, Colors.primaryColor().CGColor)

  // Set the line width
  CGContextSetLineWidth(context, CGFloat(strokeWidth))

  // Set the fill color (if you are filling the circle)
  CGContextSetFillColorWithColor(context, UIColor.clearColor().CGColor)

  // Rotate the angles so that the inputted angles are intuitive like the clock face: the top is 0 (or 2π), the right is π/2, the bottom is π and the left is 3π/2.
  // In essence, this appears like a unit circle rotated π/2 anti clockwise.
  startAngle = startAngle - Float(M_PI_2)
  endAngle = endAngle - Float(M_PI_2)

  // Draw the arc around the circle
  CGContextAddArc(context, center.x, center.y, CGFloat(radius), CGFloat(startAngle), CGFloat(endAngle), 0)

  // Draw the arc
  CGContextDrawPath(context, kCGPathStroke) // or kCGPathFillStroke to fill and stroke the circle

}
```

And here's another snippet of code I found and adapted to draw an animated circular border with Swift. Depending on the version of the beta you're using, you might need to wrap some of the `Float`s in `CGFloat()`s.

```
let radius = 100.0

// Create the circle layer
var circle = CAShapeLayer()

// Set the center of the circle to be the center of the view
let center = CGPointMake(CGRectGetMidX(self.frame) - radius, CGRectGetMidY(self.frame) - radius)

let fractionOfCircle = 3.0 / 4.0

let twoPi = 2.0 * Double(M_PI)
// The starting angle is given by the fraction of the circle that the point is at, divided by 2 * Pi and less
// We subtract M_PI_2 to rotate the circle 90 degrees to make it more intuitive (i.e. like a clock face with zero at the top, 1/4 at RHS, 1/2 at bottom, etc.)
let startAngle = Double(fractionOfCircle) / Double(twoPi) - Double(M_PI_2)
let endAngle = 0.0 - Double(M_PI_2)
let clockwise: Bool = true

// `clockwise` tells the circle whether to animate in a clockwise or anti clockwise direction
circle.path = UIBezierPath(arcCenter: center, radius: radius, startAngle: CGFloat(startAngle), endAngle: CGFloat(endAngle), clockwise: clockwise).CGPath

// Configure the circle
circle.fillColor = UIColor.blackColor().CGColor
circle.strokeColor = UIColor.redColor().CGColor
circle.lineWidth = 5

// When it gets to the end of its animation, leave it at 0% stroke filled
circle.strokeEnd = 0.0

// Add the circle to the parent layer
self.layer.addSublayer(circle)

// Configure the animation
var drawAnimation = CABasicAnimation(keyPath: "strokeEnd")
drawAnimation.repeatCount = 1.0

// Animate from the full stroke being drawn to none of the stroke being drawn
drawAnimation.fromValue = NSNumber(double: fractionOfCircle)
drawAnimation.toValue = NSNumber(float: 0.0)

drawAnimation.duration = 30.0

drawAnimation.timingFunction = CAMediaTimingFunction(name: kCAMediaTimingFunctionLinear)

// Add the animation to the circle
circle.addAnimation(drawAnimation, forKey: "drawCircleAnimation")
```