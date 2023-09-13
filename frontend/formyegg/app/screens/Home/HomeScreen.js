import React from 'react';
import {Text, View, Button} from 'react-native';
import {setMember} from '../../../reducers/memberReducer';
import {useDispatch} from 'react-redux';
import {Appbar} from 'react-native-paper';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <>
      {/* <Appbar.Header>
        <Appbar.Content title="Title" />
        <Appbar.Action icon="baby-bottle-outline" onPress={() => {}} />
        <Appbar.Action icon="baby-bottle-outline" onPress={() => {}} />
        <Appbar.Action icon="baby-bottle-outline" onPress={() => {}} />
      </Appbar.Header> */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Home Screen! 🎉</Text>
        <Button
          title="정보"
          onPress={() => navigation.navigate('Information')}
        />
        <Button
          title="로그아웃"
          onPress={() =>
            dispatch(
              setMember({
                token: '',
                memberId: 0,
                isMember: 0,
                nickname: '',
              }),
            )
          }
        />
      </View>
    </>
  );
};

export default HomeScreen;
