import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyPageScreen from '../Mypage/MyPageScreen';
import {Button, View, TouchableOpacity, Text} from 'native-base';
import HomeScreen from '../Home/HomeScreen';
import InformationScreen from '../Information/InformationScreen';
import ChildScreen from '../Mypage/ChildScreen';
import ChildRegistrationScreen from '../Mypage/ChildRegistrationScreen';
import AlertScreen from '../Home/AlertScreen';
import FamilyScreen from '../Mypage/FamilyScreen';
import AccountInfo from '../Home/AccountInfo';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="ChildRegist" component={ChildRegistrationScreen} />
      <Stack.Screen
        name="Child"
        component={ChildScreen}
        options={{title: '아이 정보'}}
      />
      <Stack.Screen
        name="Mypage"
        component={MyPageScreen}
        options={{title: '마이페이지'}}
      />
      <Stack.Screen name="AccountInfo" component={AccountInfo} />
      <Stack.Screen name="Information" component={InformationScreen} />
      <Stack.Screen name="Alert" component={AlertScreen} />
      <Stack.Screen
        name="Family"
        component={FamilyScreen}
        options={{title: '초대 코드'}}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
