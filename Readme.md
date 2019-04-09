# Shopping Cart - Jusbrasil's Challenge

[![Build Status](https://travis-ci.com/ssscassio/shopping-cart-mobile-app.svg?token=jeaQZm8myPVri3aRrrvT&branch=master)](https://travis-ci.com/ssscassio/shopping-cart-mobile-app)

|                                        Android                                        |                                          IOS                                          |
| :-----------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| <img src="https://media.giphy.com/media/443trm3Oz2tZ2PFL0N/giphy.gif" width="250"  /> | <img src="https://media.giphy.com/media/55qjTrpZy912Sr7Vqd/giphy.gif" width="250"  /> |

## Running Project

### Run on android

1 - Install the project dependencies by running the command below:

```bash
yarn install
```

2 - Connect your device with USB debugging enabled or start the android emulator.

3 - Run the script:

```bash
yarn android:install
```

You can also generate an executable and test the apk. To do this execute the command:

```bash
yarn android:build
```

The apk will be available in the `android/app/build/outputs/apk` folder.

### Run on iOS

1 - Install the project dependencies by running the command below:

```bash
yarn install
```

2 - Run the command to run in the simulator:

```bash
yarn ios:install
```

## Available Scripts

- `android:build` - Generate Release APK
- `android:install` - Run in Release mode
- `android:shake` - Show DEV menu
- `ios:install` - Run in Release mode
- `project:clean` - Clean project
- `prettier:check` - Check for unformatted files
- `prettier:all` - Format files
- `flow` - Run Flow
- `lint` - Run lint
- `start` - Start Metro Bundler
- `start:clean` - Start Metro Bundler without cache
- `test` - Run jest
- `test:watch` - Run jest in watch mode
- `relay` - Convert `graphql` literals into generated files over the src folder.
- `relay:watch` - Run relay compiler in watch mode
