import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../login/Login';
import HomeScreen from '../Home';

const AuthStack = createStackNavigator(
    {
        LoginScreen: {screen: LoginScreen},
        HomeScreen: {screen: HomeScreen}
    },
    {
        initialRouteName: 'LoginScreen'
    }
);

// 최상단 네비게이터
const AppNavigator = createSwitchNavigator(
    {
        Auth: AuthStack
    },
    {
        initialRouteName: 'Auth',
    }
);

export default createAppContainer(AppNavigator);