import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setGroupId} from '../../../reducers/memberReducer';
import {Button, TextInput} from 'react-native-paper';
import http from '../../utils/commonHttp';

const JoinScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.member);

  const [text, setText] = useState('');
  const [inputText, setInputText] = useState('');

  const submitBtn = () => {
    setText(inputText);
    http.post("group/invitation", {uuid: inputText})
    .then(res => {
      dispatch(setGroupId(res.data.groupId))
    }).catch(err => {
      console.log(err)
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
      <TextInput
        value={text}
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
    marginBottom: 10,
    padding: 8,
  },
});
export default JoinScreen;
