import React from 'react';
import {Text, View, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import { setGroupId } from '../../../reducers/memberReducer';

const InitScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.member);

  const createGroup = () => {
    axios({
      method: 'post',
      url: 'http://10.0.2.2:8080/api/group',
      headers: {
        authorization: `Bearer `+token
      }
    }).then((response) => {
        console.log(response.data);
        dispatch(setGroupId(response.data.groupId));
    }).catch((error) =>{
        console.log(error);
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>처음 가입 하셨나유?! 🎉</Text>
      <Button title="처음" onPress={() => createGroup()} />
      <Text>그룹이냐 🎉</Text>
      <Button title="그룹" onPress={() => navigation.navigate('Join')} />
    </View>
  );
};

export default InitScreen;
