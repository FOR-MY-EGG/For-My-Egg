import React, { useCallback, useState } from 'react';
import {Text, View, Button} from 'react-native';
import {setMember} from '../../../reducers/memberReducer';
import {useDispatch, useSelector} from 'react-redux';
import {Appbar} from 'react-native-paper';
import http from "../../utils/commonHttp"
import { useFocusEffect } from '@react-navigation/native';
import { setChild } from '../../../reducers/childReducer';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const memberId = useSelector((state) => state.member.memberId);
  const [childs, setChilds] = useState([]);
  // const child = useSelector((state) => state.child);
  useFocusEffect(
    useCallback(() => {
      http.get(`member/all/${memberId}`)
      .then((res) => {
        let children = res.data.children;
        if(children.length > 0) {
          setChilds(children);
          dispatch(setChild(children[0]))
        }
      })
      .catch((err) => {

      })
    }, [])
  )
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
