import { StackNavigator } from 'react-navigation';
import LoginPage from '../screens/login';
import { resetRouterTo } from './utils';

const AuthNavigator = StackNavigator(
  {
    Login: { screen: LoginPage }
  },
  {
    initialRouteName: 'Login'
  }
);

export const resetAuthStack = routeName => resetRouterTo(false, routeName);

export default AuthNavigator;
