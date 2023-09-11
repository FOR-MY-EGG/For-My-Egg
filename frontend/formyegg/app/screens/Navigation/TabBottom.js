import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Home/HomeScreen';
import LoginScreen from '../Login/LoginScreen';
import MemoScreen from '../Memo/MemoScreen';
import BoardScreen from '../../../src/board/Board';

const Tab = createBottomTabNavigator();

const TabBottom = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {/* <Tab.Screen name="Login" component={LoginScreen} /> */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Memo" component={MemoScreen} />
      <Tab.Screen name="Board" component={BoardScreen} />
    </Tab.Navigator>
  );
};

export default TabBottom;
