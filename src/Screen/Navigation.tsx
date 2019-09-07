import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const MainNavigator = createSwitchNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;