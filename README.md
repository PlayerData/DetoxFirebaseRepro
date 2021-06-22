Demonstrates an issue with Detox and RNFirebase.

You will need to setup a Firebase project, add an iOS app, and add `GoogleService-Info.plist`
to `ios/GoogleService-Info.plist`.

Then:

```sh
yarn install
(cd ios && pod install)
yarn detox build
yarn detox test --debug-synchronization 5000
```
