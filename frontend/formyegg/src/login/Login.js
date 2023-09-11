import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image } from 'react-native';
import  * as KakaoLogin from '@react-native-seoul/kakao-login';
import { TouchableOpacity } from 'react-native-gesture-handler';
import kakaoButton from 'formyegg/assets/images/kakao_login_symbol.png';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setMember } from '../../reducers/memberReducer';
import { navigate } from "../common/NavigationService";


export default function Login(){
    const dispatch = useDispatch();

    const login = () => {
        KakaoLogin.login().then((result) => {
            console.log("Login Success", JSON.stringify(result));
            const kakaoTokenJson = JSON.stringify(result);
            const kakaoToken = JSON.parse(kakaoTokenJson);
            getProfile(kakaoToken.accessToken);
        }).catch((error) => {
            if (error.code === 'E_CANCELLED_OPERATION') {
                console.log("Login Cancel", error.message);
        } else {
            console.log(`Login Fail(code:${error.code})`, error.message);
        }
      });
    };

    const getProfile = (kakaoToken) => {
        KakaoLogin.getProfile().then((result) => {
          const kakaoUserJson = JSON.stringify(result);
          const kakaoUser = JSON.parse(kakaoUserJson);
          const data = {
              kakao_token : kakaoToken,
              kakao_id: kakaoUser.id,
              nickname: kakaoUser.nickname
          };
          axios({
              method: 'post',
              url: 'http://10.0.2.2:8080/api/member',
              data: data
          }).then((response) => {
              dispatch(setMember(response.data));
              if(response.data.isMember == 0){
                navigate('ProfileScreen', {
                    screen: 'ProfileScreen',
                    info: 'information'});
              }
          }).catch((error) =>{
              console.log(error);
          });
      
          console.log("GetProfile Success", JSON.stringify(result));
        }).catch((error) => {
          console.log(`GetProfile Fail(code:${error.code})`, error.message);
        });
    };
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => login()} style={styles.kakaoButton}>
        <Image source={kakaoButton} style={styles.kakaoSymbol} />
        <Text>카카오 로그인</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    kakaoButton : {
        justifyContent: 'center',
        borderRadius: 12,
        fontSize : 15,
        backgroundColor:'#FEE500',
        textAlign: 'center',
        margin: 10,
        padding: 20,
        height: 100,
        flexDirection :'row',
        lineHeight: 100
    },
    kakaoSymbol : {
        height: 30,
        width: 40,
        marginRight: 10
    }
})
