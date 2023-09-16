import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BoardType1Screen from '../Board/BoardType1Screen';
import BoardType2Screen from '../Board/BoardType2Screen';
import BoardType3Screen from '../Board/BoardType3Screen';
import {Button} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const BoardTopTab = ({navigation}) => {
  // function BoardTopTab(navigation) {
  return (
    <>
      {/* <Button title="글작성" onPress={() => navigation.navigate('Write')} />
      <Button title="채팅" onPress={() => navigation.navigate('Chat')} /> */}
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#A2C6C3',
          tabBarInactiveTintColor: '#7E7855',

          tabBarPressColor: '#A3C9B8',
          tabBarIndicatorStyle: {
            backgroundColor: '#A3C9B8',
          },
        }}>
        <Tab.Screen
          name="type1"
          component={BoardType1Screen}
          options={{tabBarLabel: '임신/출산'}}
        />
        <Tab.Screen
          name="type2"
          component={BoardType2Screen}
          options={{tabBarLabel: '육아'}}
        />
        <Tab.Screen
          name="type3"
          component={BoardType3Screen}
          options={{tabBarLabel: '산후조리'}}
        />
      </Tab.Navigator>
    </>
  );
};

export default BoardTopTab;
