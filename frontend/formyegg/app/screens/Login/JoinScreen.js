import React, { useState } from 'react';
import {Text, View, Button, StyleSheet, TextInput} from 'react-native';
import { useSelector } from 'react-redux';
import axios from 'axios';

const JoinScreen = ({navigation}) => {
  const {token} = useSelector(state => state.member);

  const [text, setText] = useState('');
  const [inputText, setInputText] = useState('');


  const submitBtn = () => {
    setText(inputText);
    console.log(inputText);
    axios({
      method: 'post',
      url: 'http://10.0.2.2:8080/api/group/invitation',
      data : {
        uuid : inputText
      },
      headers: {
        authorization: `Bearer `+token
      }
    }).then((response) => {
        console.log(response.data);
        // 메인으로 이동!!!!!!!!!!!!!!!
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
      <Text>그룹 코드 내놔.🎉</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setInputText(text)}
          placeholder="그룹 코드를 입력해주세요."
        />
      <Button title="입력" onPress={() => submitBtn()} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 8,
  }
})
export default JoinScreen;
