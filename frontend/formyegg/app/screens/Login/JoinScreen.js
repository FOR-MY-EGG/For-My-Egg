import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {setGroupId} from '../../../reducers/memberReducer';
import {Button, TextInput} from 'react-native-paper';

const JoinScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.member);

  const [text, setText] = useState('');
  const [inputText, setInputText] = useState('');

  const submitBtn = () => {
    setText(inputText);
    axios({
      method: 'post',
      url: 'http://10.0.2.2:8080/api/group/invitation',
      data: {
        uuid: inputText,
      },
      headers: {
        authorization: `Bearer ` + token,
      },
    })
      .then(response => {
        console.log(response.data.groupId);
        dispatch(setGroupId(response.data.groupId));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 50,
      }}>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>
        그룹 코드를 입력해주세요
      </Text>
      {/* <TextInput
        style={styles.textInput}
        onChangeText={text => setInputText(text)}
        placeholder="그룹 코드를 입력해주세요."
      /> */}
      <TextInput
        // label="그룹 코드"
        value={text}
        // placeholder="그룹 코드를 입력해주세요."
        mode="outlined"
        outlineColor="transparent"
        selectionColor="#A3C9B8"
        activeOutlineColor="#A3C9B8"
        onChangeText={text => setText(text)}
        style={{marginBottom: 10, borderRadius: 50}}
      />
      <Button
        title="Login"
        mode="contained"
        buttonColor="#A3C9B8"
        textColor="#F6F6F6"
        style={{borderRadius: 50}}
        onPress={() => submitBtn()}>
        등록
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    // borderWidth: 1,
    // borderColor: 'gray',
    marginBottom: 10,
    padding: 8,
  },
});
export default JoinScreen;
