import Expo from 'expo';
import { Root } from 'native-base';
import React, { Component } from 'react';
import deviceLog from 'react-native-device-log';
import createRootNavigator from './app/navigators/root-navigator';
import logger from './logger';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await logger;
    deviceLog.clear();
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'), // eslint-disable-line global-require
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'), // eslint-disable-line global-require
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf') // eslint-disable-line global-require
    });
    this.setState({ isReady: true });
  }

  render() {
    const RootComponent = createRootNavigator('Auth');
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Root>
        <RootComponent />
      </Root>
    );
  }
}

export default App;
