import React, { useState } from 'react';
import {Text, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setMember, setFcmToken} from '../../../reducers/memberReducer';
import * as KakaoLogin from '@react-native-seoul/kakao-login';
import axios from 'axios';
import {Button} from 'react-native-paper';
import messaging from '@react-native-firebase/messaging';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  
  const login = () => {
    KakaoLogin.login()
      .then(result => {
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
    KakaoLogin.getProfile().then(result => {
      const kakaoUserJson = JSON.stringify(result);
      const kakaoUser = JSON.parse(kakaoUserJson);
      messaging().getToken()
        .then((token) => {
          const data = {
            kakao_token: kakaoToken,
            kakao_id: kakaoUser.id,
            nickname: kakaoUser.nickname,
            device_token: token
          };
          axios({
            method: 'post',
            url: 'http://ec2-3-39-138-177.ap-northeast-2.compute.amazonaws.com:8080/api/member',
            data: data,
          })
            .then(response => {
              dispatch(setMember(response.data));
              
              dispatch(setFcmToken(token));
              console.log('[FCM Token] ', token);
              if (response.data.isMember == 0) {
                navigation.navigate('Group');
              }
            })
            .catch(error => {
              console.log(error);
            });
        })
    });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF9E8',
      }}>
      <Image
        source={require('../../assets/images/splash.gif')}
        style={{width: 400, height: 400, marginBottom: 30}}
      />
      <Button
        title="Login"
        mode="contained"
        buttonColor="#FFE900"
        textColor="#232323"
        onPress={() => login()}
        style={{borderRadius: 24, padding: 4}}>
        <Image source={require('../../assets/images/kakao.png')} />
        카카오톡으로 시작하기
      </Button>
    </View>
  );
};
export default LoginScreen;
