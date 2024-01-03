1. Install and configure the Android SDK as per this documentation: https://reactnative.dev/docs/environment-setup?platform=android

   Install and configure the iOS environment like so: https://reactnative.dev/docs/next/environment-setup?platform=ios (if `iOS` support is needed).

Ensure that the following should be present in your shell profile (~/.bash_profile etc.):

```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

2. Navigate to the `client` directory (all commands are from within this main app package):

```
$ cd final-prototype/packages/client
```

4. Run the following commands: (this is a one-time operation)

```
$ yarn
$ npx expo prebuild
```

`npx expo prebuild` will generate the `android` and `ios` directories.

5. Run the following commands to build the project:

```
$ yarn setup
```

4. Launch Android/iOS:

```
$ yarn android
```

or

```
$ yarn ios
```

Note: Changes to `client/App.tsx` (and other TypeScript files) do not require a rebuild, but changes to the Rust code will require a rebuild (and relaunch of the emulator):

```
$ cd final-prototype/packages/client
$ yarn setup
$ yarn android (or yarn ios)
```