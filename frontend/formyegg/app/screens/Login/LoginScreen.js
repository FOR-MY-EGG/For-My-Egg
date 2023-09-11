import React from 'react';
import {Text, View, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {setMember} from '../../../reducers/memberReducer';

const LoginScreen = () => {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>LoginScreen! 🎉</Text>
      <Button
        title="Login"
        onPress={() => {
          // props.setIsLogin(false);
          //로그인된 사람의 정보를 모두 넣어줘야한다!!!
          dispatch(setMember({token: '0t0t0'}));
        }}
      />
    </View>
  );
};

export default LoginScreen;
