## `@expo/ui/swift-ui` `Picker` not available on iOS <17.0

A minimum reproducible repo showcasing the Picker component not being supported on devices running iOS older than 17.

### Show me

<video src="https://github.com/user-attachments/assets/07efe7a2-6a2a-479e-a7a1-61a5ef6b9a5e" width="320" height="240" controls></video>

### Reproduction steps

1. [Run the app](#running-the-app) on a device running iOS 17.0 to verify the Picker component is being rendered and working.
2. [Run the app](#running-the-app) on a device running iOS older than 17.0 to verify that the Picker component is not rendered.

### Running the app

1. Clone the repo
2. `npm install`
3. `npm run ios -- --device=<UID>` (replace `<UID>` with the UID of the target device containing iOS 17 or older)