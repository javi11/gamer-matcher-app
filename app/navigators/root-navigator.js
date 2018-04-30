import { StackNavigator } from 'react-navigation';
import AuthNavigator from './auth-navigator';
import { resetRouterTo } from './utils';

const createRootNavigator = initialRouteName =>
  StackNavigator(
    {
      Auth: { screen: AuthNavigator }
    },
    {
      initialRouteName,
      headerMode: 'none'
    }
  );

export const resetRootStack = routeName => resetRouterTo(true, routeName);

export default createRootNavigator;
