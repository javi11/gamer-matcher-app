import Expo from 'expo';
import { Root } from 'native-base';
import React, { Component } from 'react';
import createRootNavigator from './app/navigators/root-navigator';

class App extends Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'), // eslint-disable-line global-require
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'), // eslint-disable-line global-require
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'), // eslint-disable-line global-require
    });
  }

  render() {
    const RootComponent = createRootNavigator('Auth');
    return (
      <Root>
        <RootComponent />
      </Root>
    );
  }
}

export default App;
