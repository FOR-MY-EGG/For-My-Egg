import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Home/HomeScreen';
import BoardStack from './BoardStack';
import MemoStack from './MemoStack';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const MainTopBottom = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Memo" component={MemoStack} />
      <Tab.Screen name="Board" component={BoardStack} />
    </Tab.Navigator>
  );
};

export default MainTopBottom;
