import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import http from '../../utils/commonHttp';
import { Text, View, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign';

const BoardWriteScreen = ({navigation, route}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState({name: "", type: "", uri: ""});
  const memberId = useSelector((state) => state.member.memberId);

  const onSubmit = () => {
    const board = {
        writer : memberId,
        affiliation: route.params.affiliation,
        title : title,
        content : content,
    }
    const formData = new FormData();
    formData.append("board", JSON.stringify(board)
    , { type: "application/json"});
    if(imageFile.name) formData.append("image", imageFile);
    http.post('board',
      formData,
      { headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((response) => {
        console.log(JSON.stringify(response))
        navigation.navigate('Home');
    }).catch((error) =>{
        alert("asdAasd")
        console.log(error);
    });
  }

  const onSelectImage = () => {
    launchImageLibrary(
      {
        madiaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: true
      }, 
      (response) => {
        if(response.didCancel){
          return;
        }else if(response.errorCode){
          console.log("Image Error : " + response.errorCode);
        }
        setImageFile({name : response.assets[0].fileName, type: response.assets[0].type, uri: response.assets[0].uri});
     })
  }

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
        style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center', width: 200, marginBottom: 30}}>게시글 등록</Text>
        <Text
        style={styles.text}>제목</Text>
        <TextInput
          backgroundColor={'white'}
          style={styles.textInput}
          onChangeText={(title) => setTitle(title)}
          placeholder="제목을 작성해주세요."
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
        style={styles.text}>게시판 사진</Text>
        <TouchableOpacity
              style={{ 
                margin: 15,
                width: '85%',
                height: 60,
                padding: 10,
                borderRadius: 12,
                color: 'black',
                backgroundColor: '#F3F3F3',
                flexDirection : 'row',
                justifyContent : 'center',
                alignItems: 'center'
              }}
              onPress={()=>onSelectImage()}
          > 
              <MaterialCommunityIcons
                name="upload"
                size={17}
              />
            <Text style={styles.upload}>업로드 하기</Text>
          </TouchableOpacity>
          <TouchableOpacity
              key={'rtl'}
              style={{ 
                margin: 5,
                width: '15%',
                height: 40,
                padding: 10,
                borderRadius: 12,
                color: 'black',
                backgroundColor: '#F3F3F3',
                marginTop : 40,
                marginBottom: 20,
                alignItems: 'center'
              }}
              onPress={()=>onSubmit()}
          >
              <Text style={styles.submit}>등록</Text>
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
    marginLeft: 5
  }, submit: {
    color: '#496B73',
    textAlign: 'center',
    textAlignVertical:'center'
  }
})

export default BoardWriteScreen;
