import React from 'react';
import {Text, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {setGroupId} from '../../../reducers/memberReducer';
import {Button} from 'react-native-paper';

const InitScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.member);

  const createGroup = () => {
    axios({
      method: 'post',
      url: 'http://10.0.2.2:8080/api/group',
      headers: {
        authorization: `Bearer ` + token,
      },
    })
      .then(response => {
        console.log(response.data);
        dispatch(setGroupId(response.data.groupId));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View
      style={{
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 70,
        // alignItems: 'center',
        // alignSelf: 'center',
        // flexDirection: 'row',
        backgroundColor: '#FDF8E1',
      }}>
      <Image
        source={require('../../assets/images/main.png')}
        style={{
          width: 300,
          height: 250,
          marginBottom: 30,
          alignSelf: 'center',
          // justifyContent: 'center',
          // alignItems: 'center',
          // alignContent: 'center',
        }}
      />
      <View
        style={{
          marginBottom: 20,
        }}>
        <Button
          title="Login"
          mode="contained"
          buttonColor="#A3C9B8"
          textColor="#F6F6F6"
          style={{borderRadius: 24, padding: 4}}
          onPress={() => createGroup()}>
          처음 가입 하셨나요?
        </Button>
      </View>
      {/* <Text
        style={{
          textAlign: 'center',
          marginBottom: 10,
          fontSize: 14,
          fontWeight: 600,
        }}>
        그룹 코드를 가지고 계신가요?
      </Text> */}
      <Button
        title="Login"
        mode="contained"
        buttonColor="#A2C6C3"
        textColor="#F6F6F6"
        style={{borderRadius: 24, padding: 4}}
        onPress={() => navigation.navigate('Join')}>
        그룹 코드를 가지고 계신가요?
      </Button>
    </View>
  );
};

export default InitScreen;
