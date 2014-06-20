---
layout: post
title: "Example Code for Using Swift to Save and Query iOS Keychain"
category: ios
---

I wrote a couple of small utility functions for using the iOS Keychain with Swift. This has two very basic functions: to save a string to the Keychain, and to load that string back later. I'll update this post if I need to update this utility service to handle deletion, updating, and so on.


## KeychainService

```
import UIKit
import Security

let serviceIdentifier = "MySerivice"
let userAccount = "authenticatedUser"
let accessGroup = "MySerivice"

class KeychainService: NSObject {

  class func saveToken(token: NSString) {
    self.save(serviceIdentifier, data: token)
  }

  class func loadToken() -> NSString? {
    var token = self.load(serviceIdentifier)

    return token
  }

  class func save(service: NSString, data: NSString) {
    var dataFromString: NSData = data.dataUsingEncoding(NSUTF8StringEncoding, allowLossyConversion: false)
    // Instantiate a new default keychain query
    var keychainQuery: NSMutableDictionary = NSMutableDictionary(objects: [kSecClassGenericPassword, service, userAccount, dataFromString], forKeys: [kSecClass, kSecAttrService, kSecAttrAccount, kSecValueData])

    // Delete any existing items
    SecItemDelete(keychainQuery as CFDictionaryRef)

    // Add the new keychain item
    var status: OSStatus = SecItemAdd(keychainQuery as CFDictionaryRef, nil)
  }

  class func load(service: NSString) -> NSString? {
    // Instantiate a new default keychain query
    // Tell the query to return a result
    // Limit our results to one item
    var keychainQuery: NSMutableDictionary = NSMutableDictionary(objects: [kSecClassGenericPassword, service, userAccount, kCFBooleanTrue, kSecMatchLimitOne], forKeys: [kSecClass, kSecAttrService, kSecAttrAccount, kSecReturnData, kSecMatchLimit])

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