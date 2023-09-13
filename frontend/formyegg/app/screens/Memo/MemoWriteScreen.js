import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

const MemoWriteScreen = () => {
  const [sender, setSender] = useState('');
  const [transfer, setTransfer] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [inputSender, setInputSender] = useState('');
  const [inputTransfer, setInputTransfer] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');

  return (
    <ScrollView
      contentContainerStyle={{ 
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      style={{
        backgroundColor: '#FDF8E1'
      }}>
        <Text
        marginTop={20}
        style={styles.text}>출금 통장</Text>
        <TouchableOpacity
              style={{ 
                margin: 15,
                width: '85%',
                height: 60,
                padding: 10,
                borderRadius: 12,
                color: 'black',
                backgroundColor: 'white'
              }}
              // onPress={()=>onSelectImage()}
          ><Text style={styles.upload}>통장</Text></TouchableOpacity>
        <Text
        style={styles.text}>예금주</Text>
        <TextInput
          backgroundColor={'white'}
          style={styles.textInput}
          onChangeText={(sender) => setInputSender(sender)}
          placeholder="통장에 남길 한마디를 적어주세요."
        />
        <Text
        style={styles.text}>입금액</Text>
        <TextInput
          textAlign='right'
          backgroundColor={'white'}
          style={styles.textInput}
          onChangeText={(transfer) => setTransfer(transfer)}
        />
        <Text
        style={styles.text}>제목</Text>
        <TextInput
          backgroundColor={'white'}
          style={styles.textInput}
          onChangeText={(title) => setTitle(title)}
          placeholder="메모의 제목을 작성해주세요."
        />
        <Text
        style={styles.text}>내용</Text>
        <TextInput
          backgroundColor={'white'}
          multiline={true}
          style={styles.contentInput}
          onChangeText={(content) => setContent(content)}
          placeholder="내용을 작성해주세요."
        />
        <Text
        style={styles.text}>사진</Text>
        <TouchableOpacity
              style={{ 
                margin: 15,
                width: '85%',
                height: 60,
                padding: 10,
                borderRadius: 12,
                color: 'black',
                backgroundColor: '#F3F3F3'
              }}
              // onPress={()=>onSelectImage()}
          >
              <Text style={styles.upload}>업로드 하기</Text>
          </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  textInput: {
    margin: 15,
    width: '85%',
    height: 60,
    padding: 10,
    borderRadius: 12,
    color: 'black'
  },
  text : {
    textAlign : 'left',
    width:'85%',
    paddingLeft : 10
  },
  contentInput : {
    margin: 15,
    width: '85%',
    height: 150,
    padding: 10,
    paddingTop: 20,
    borderRadius: 12,
    textAlignVertical:"top"
  },
  upload : {
    color: 'black',
    textAlign: 'center',
    textAlignVertical:'center'
  }
})
export default MemoWriteScreen;
