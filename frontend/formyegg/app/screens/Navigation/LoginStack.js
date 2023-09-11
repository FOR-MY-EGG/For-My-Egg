import React, {useState} from 'react';
import LoginScreen from '../Login/LoginScreen';
import TabBottom from './TabBottom';
import {useSelector} from 'react-redux';

function LoginStack() {
  const {token} = useSelector(state => state.member);

  return <>{!token ? <LoginScreen /> : <TabBottom />}</>;
}

export default LoginStack;
