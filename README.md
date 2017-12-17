# XMR-DEV-TOOLS

As of now all this library does is generate Monero brain wallets from 32-byte (64 hex character) strings. Eventually this library will contain a variety of Monero related dev scripts.

## Global Variables
jssha3 - The JS library that contains a variety of different hashing functions

lodash - Library for manipulating data structures

crypto - CryptoNote cryptography utilities

## Installation
To install from npm: 
`npm install -g xmr-dev-tools`

To run locally: `xmr-dev-tools`

## Tutorial
``` javascript
var password = "SomeSecretPassword!ThatCanUse@SymbolsAndNumb3r5"
var seed = password.repeat(1000) // Or any large number
lodash.times(1000, (i) => { seed = jssha3.sha3_256(seed) })
var wallet = new XMR({seed: seed})
``` 
