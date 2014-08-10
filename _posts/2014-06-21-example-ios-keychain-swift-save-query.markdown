---
layout: post
title: "Example Code for Using Swift to Save and Query iOS Keychain"
category: ios
---

I wrote a couple of small utility functions for using the iOS Keychain with Swift. This has two very basic functions: to save a string to the Keychain, and to load that string back later. I'll update this post if I need to update this utility service to handle deletion, updating, and so on.

*Thanks to [rshelby](http://rshelby.com/2014/08/using-swift-to-save-and-query-ios-keychain-in-xcode-beta-4/), I've updated this code to work on later versions of the beta*. Let me know on [Twitter](http://twitter.com/_matthewpalmer) if it doesn't work for you.


## KeychainService

```
import UIKit
import Security

// Identifiers
let serviceIdentifier = "MySerivice"
let userAccount = "authenticatedUser"
let accessGroup = "MySerivice"

// Arguments for the keychain queries
let kSecClassValue = kSecClass.takeRetainedValue() as NSString
let kSecAttrAccountValue = kSecAttrAccount.takeRetainedValue() as NSString
let kSecValueDataValue = kSecValueData.takeRetainedValue() as NSString
let kSecClassGenericPasswordValue = kSecClassGenericPassword.takeRetainedValue() as NSString
let kSecAttrServiceValue = kSecAttrService.takeRetainedValue() as NSString
let kSecMatchLimitValue = kSecMatchLimit.takeRetainedValue() as NSString
let kSecReturnDataValue = kSecReturnData.takeRetainedValue() as NSString
let kSecMatchLimitOneValue = kSecMatchLimitOne.takeRetainedValue() as NSString

class KeychainService: NSObject {

  /**
   * Exposed methods to perform queries.
   * Note: feel free to play around with the arguments
   * for these if you want to be able to customise the
   * service identifier, user accounts, access groups, etc.
   */
  public class func saveToken(token: NSString) {
    self.save(serviceIdentifier, data: token)
  }

  public class func loadToken() -> NSString? {
    var token = self.load(serviceIdentifier)

    return token
  }

  /**
   * Internal methods for querying the keychain.
   */
  private class func save(service: NSString, data: NSString) {
    var dataFromString: NSData = data.dataUsingEncoding(NSUTF8StringEncoding, allowLossyConversion: false)

    // Instantiate a new default keychain query
    var keychainQuery: NSMutableDictionary = NSMutableDictionary(objects: [kSecClassGenericPasswordValue, service, userAccount, dataFromString], forKeys: [kSecClassValue, kSecAttrServiceValue, kSecAttrAccountValue, kSecValueDataValue])

    // Delete any existing items
    SecItemDelete(keychainQuery as CFDictionaryRef)

    // Add the new keychain item
    var status: OSStatus = SecItemAdd(keychainQuery as CFDictionaryRef, nil)
  }

  private class func load(service: NSString) -> NSString? {
    // Instantiate a new default keychain query
    // Tell the query to return a result
    // Limit our results to one item
    var keychainQuery: NSMutableDictionary = NSMutableDictionary(objects: [kSecClassGenericPasswordValue, service, userAccount, kCFBooleanTrue, kSecMatchLimitOneValue], forKeys: [kSecClassValue, kSecAttrServiceValue, kSecAttrAccountValue, kSecReturnDataValue, kSecMatchLimitValue])

    var dataTypeRef :Unmanaged<AnyObject>?

    // Search for the keychain items
    let status: OSStatus = SecItemCopyMatching(keychainQuery, &dataTypeRef)

    let opaque = dataTypeRef?.toOpaque()

    var contentsOfKeychain: NSString?

    if let op = opaque? {
      let retrievedData = Unmanaged<NSData>.fromOpaque(op).takeUnretainedValue()

      // Convert the data retrieved from the keychain into a string
      contentsOfKeychain = NSString(data: retrievedData, encoding: NSUTF8StringEncoding)
    } else {
      println("Nothing was retrieved from the keychain. Status code \(status)")
    }

    return contentsOfKeychain
  }
}
```

## Usage

It can then be used like this:

```
KeychainService.saveToken("token")
KeychainService.loadToken()
```