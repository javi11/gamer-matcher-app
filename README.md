<h1>Gamer Matcher App</h1>

A react native app for gamers ;)

## Contributor

[Contributor guide](./CONTRIBUTING.md)

### Install

#### Prerequisites:

- Node > 8
- Android SDK or XCode

#### Installation:

1. Install yarn
```
npm i -g yarn
```
2. Install dependencies
```
yarn
```

#### Execute

To execute, connect your mobile phone or run your emulator and execute:
```
yarn run start
```

### Tecnologies

This are the following tecnologies used for this app:

- [Relay Modern](https://github.com/facebook/relay): as a graphql client and replacement of Redux
- [Native Base](https://nativebase.io): as a base theme components and icons
- [React Navigation](https://reactnavigation.org): as a framework for manage the app navigation between views
- [Expo.io](https://expo.io): as a app debugger and native features lib (camera...)
- [Eslint Airbnb](https://www.npmjs.com/package/eslint-config-airbnb): as the code lintern

### Folders and meaning

This are the current folder structure and the meaning of each one:

- app/component: Set all dummy components here as buttons, list items etc.
- app/config: The app configuration, initializations and constants like the relay initialization.
- app/navigators: All the navigation initialization or behaviour bewteen screens should be here.
- app/screens: Here you will add each screen login, styles and templates of the app
- app/services: External API services will be here
- app/themes: All posible themes and style variables will be here
- app/utils: All the common pure functions should be here. Like a function that does 1 + 1.