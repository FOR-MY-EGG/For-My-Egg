import React from 'react';
import {Text, View, Button} from 'react-native';
import { setMember } from '../../../reducers/memberReducer';
import { useDispatch } from 'react-redux';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home Screen! 🎉</Text>
      <Button title="내 정보" onPress={() => navigation.navigate('Mypage')} />
      <Button title="정보" onPress={() => navigation.navigate('Information')} />
      <Button title="로그아웃" onPress={() => dispatch(setMember({
        token: "",
        memberId: 0,
        isMember: 0,
        nickname: "",
      }))} />
    </View>
  );
};

export default HomeScreen;
