import React from 'react';
import {Text, View, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {setMember} from '../../../reducers/memberReducer';
import * as KakaoLogin from '@react-native-seoul/kakao-login';
import axios from 'axios';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const login = () => {
    KakaoLogin.login()
      .then(result => {
        console.log('Login Success', JSON.stringify(result));
        const kakaoTokenJson = JSON.stringify(result);
        const kakaoToken = JSON.parse(kakaoTokenJson);
        getProfile(kakaoToken.accessToken);
      })
      .catch(error => {
        if (error.code === 'E_CANCELLED_OPERATION') {
          console.log('Login Cancel', error.message);
        } else {
          console.log(`Login Fail(code:${error.code})`, error.message);
        }
      });
  };

  const getProfile = kakaoToken => {
    KakaoLogin.getProfile()
      .then(result => {
        const kakaoUserJson = JSON.stringify(result);
        const kakaoUser = JSON.parse(kakaoUserJson);
        const data = {
          kakao_token: kakaoToken,
          kakao_id: kakaoUser.id,
          nickname: kakaoUser.nickname,
        };
        axios({
          method: 'post',
          url: 'http://10.0.2.2:8080/api/member',
          data: data
      }).then((response) => {
          if(response.data.isMember == 0){
            navigation.navigate('Group');
          }
          dispatch(setMember(response.data));
      }).catch((error) =>{
          console.log(error);
      });
    })
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>LoginScreen! 🎉</Text>
      <Button title="Login" onPress={() => login()} />
    </View>
  );
};
export default LoginScreen;
