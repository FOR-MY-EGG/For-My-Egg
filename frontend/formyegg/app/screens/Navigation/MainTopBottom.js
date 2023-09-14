import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BoardStack from './BoardStack';
import MemoStack from './MemoStack';
import HomeStack from './HomeStack';
import {Text, View, Button, TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

const MainTopBottom = navigation => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: '홈',
          // tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Memo"
        component={MemoStack}
        options={{
          title: '메모',
          // tabBarLabel: 'Memo',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="calendar-heart"
              color={color}
              size={26}
            />
          ),
          tabBarShowLabel: false,
          // headerShown: false,
        }}
      />
      <Tab.Screen
        name="Board"
        component={BoardStack}
        options={{
          title: '게시판',
          // tabBarLabel: 'Memo',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="wechat" color={color} size={26} />
          ),
          tabBarShowLabel: false,
          // headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTopBottom;
