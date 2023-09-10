import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '../Mainpage/Main';
import LoginScreen from '../login/Login';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainScreen} />
      <Tab.Screen name="Settings" component={LoginScreen} />
    </Tab.Navigator>
  );
}
export default BottomTab;
