import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyPageScreen from '../Mypage/MyPageScreen';
import {Button, View, TouchableOpacity, Text} from 'native-base';
import HomeScreen from '../Home/HomeScreen';
import InformationScreen from '../Information/InformationScreen';
import ChildScreen from '../Mypage/ChildScreen';
import ChildRegistrationScreen from '../Mypage/ChildRegistrationScreen';
import AlertScreen from '../Home/AlertScreen';
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
      <Stack.Screen name="Child" component={ChildScreen} />
      <Stack.Screen name="Mypage" component={MyPageScreen} />
      <Stack.Screen name="AccountInfo" component={AccountInfo} />
      <Stack.Screen name="Information" component={InformationScreen} />
      <Stack.Screen name="Alert" component={AlertScreen} />
      {/* <Stack.Screen name="Write" component={BoardWriteScreen} /> */}
    </Stack.Navigator>
  );
}

export default HomeStack;
