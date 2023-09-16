import React, {useState} from 'react';
import LoginScreen from '../Login/LoginScreen';
import MainTopBottom from './MainTopBottom';
import {useDispatch, useSelector} from 'react-redux';
import JoinScreen from '../Login/JoinScreen';
import InitScreen from '../Login/InitScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function LoginStack() {
  //token을 isMember로 확인해서 정보가 있으면 메인으로 보내야함 (1)
  const {groupId} = useSelector(state => state.member);
  const {token} = useSelector(state => state.member);
  return (
    <>
      {!groupId ? (
        <Stack.Navigator>
          {!token ? (
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
          ) : (
            <>
              <Stack.Screen
                name="Group"
                component={InitScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Join"
                component={JoinScreen}
                options={{title: '그룹 코드 등록'}}
              />
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
