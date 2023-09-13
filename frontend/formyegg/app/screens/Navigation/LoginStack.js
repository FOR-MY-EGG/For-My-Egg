import React, {useState} from 'react';
import LoginScreen from '../Login/LoginScreen';
import MainTopBottom from './MainTopBottom';
import {useSelector} from 'react-redux';
import JoinScreen from '../Login/JoinScreen';
import InitScreen from '../Login/InitScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function LoginStack() {
  //token을 isMember로 확인해서 정보가 있으면 메인으로 보내야함 (1)
  const {isMember} = useSelector(state => state.member);
  const {token} = useSelector(state => state.member);

  return (
    <>
      {!isMember ? (
        <Stack.Navigator>
          {!token ? (
            <Stack.Screen name="Login" component={LoginScreen} />
          ) : (
            <>
              <Stack.Screen name="Group" component={InitScreen} />
              <Stack.Screen name="Join" component={JoinScreen} />
            </>
          )}
        </Stack.Navigator>
      ) : (
        <MainTopBottom />
      )}
    </>
  );
}

export default LoginStack;
