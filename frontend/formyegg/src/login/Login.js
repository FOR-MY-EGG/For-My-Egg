import React from 'react';
import {SafeAreaView, StyleSheet, Text, Image} from 'react-native';
import * as KakaoLogin from '@react-native-seoul/kakao-login';
import {TouchableOpacity} from 'react-native-gesture-handler';
import kakaoButton from 'formyegg/app/assets/images/kakao_login_symbol.png';

const Login = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => login()} style={styles.kakaoButton}>
        <Image source={kakaoButton} style={styles.kakaoSymbol} />
        <Text>카카오 로그인</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const login = () => {
  KakaoLogin.login()
    .then(result => {
      console.log('Login Success', JSON.stringify(result));
      getProfile();
    })
    .catch(error => {
      if (error.code === 'E_CANCELLED_OPERATION') {
        console.log('Login Cancel', error.message);
      } else {
        console.log(`Login Fail(code:${error.code})`, error.message);
      }
    });
};

const getProfile = () => {
  KakaoLogin.getProfile()
    .then(result => {
      const kakaoUserJson = JSON.stringify(result);
      const kakaoUser = JSON.parse(kakaoUserJson);
      console.log(kakaoUser.id);
      console.log('GetProfile Success', JSON.stringify(result));
    })
    .catch(error => {
      console.log(`GetProfile Fail(code:${error.code})`, error.message);
    });
};

const styles = StyleSheet.create({
  kakaoButton: {
    justifyContent: 'center',
    borderRadius: 12,
    fontSize: 15,
    backgroundColor: '#FEE500',
    textAlign: 'center',
    margin: 10,
    padding: 20,
    height: 80,
    flexDirection: 'row',
  },
  kakaoSymbol: {
    height: 30,
    width: 40,
    marginRight: 10,
  },
});
export default Login;
