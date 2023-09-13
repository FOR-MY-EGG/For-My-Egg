import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useDispatch, useSelector} from 'react-redux';
import { Avatar } from 'react-native-paper';
import axios from 'axios';

const MemoWriteScreen = ({ navigation }) => {
  const data = new FormData();
  const {childId} = useSelector(state => state.member);
  const {token} = useSelector(state => state.member);

  const [sender, setSender] = useState('');
  const [transfer, setTransfer] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [response, setResponse] = useState("");
  const [imageFile, setImageFile] = useState("");

  const onSubmit = () => {
    console.log("submit")
    axios({
      method: 'post',
      url: 'http://10.0.2.2:8080/api/memo', //@Multipart error
      data : {
        memoReqDto : {
          childId : childId,
          sender : sender,
          amount: transfer,
          title: title,
          content: content
        }
      },
      headers: {
        authorization: `Bearer `+token,
        'Content-Type': 'multipart/form-data'
      }
    }).then((response) => {
        console.log("memo upload success");
        navigation.navigate('MemoMain');
    }).catch((error) =>{
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
        console.log(response)
        // console.log(response.assets[0].base64)
        if(response.didCancel){
          return;
        }else if(response.errorCode){
          console.log("Image Error : " + response.errorCode);
        }
        
        setResponse(response);
        setImageFile(response.assets[0].base64);
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
                backgroundColor: 'white',
                justifyContent: 'center'
              }}
              onPress={() => navigation.navigate('AccountList')}
          >
            <View style={{flexDirection:'row', alignItems: 'center'}}>
              <Avatar.Image style={{backgroundColor:'white'}}
              size={43} source={require('../../assets/images/shinhan_logo.png')} />
              <View style={{marginLeft: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.upload}>신한 주거래 S20통장</Text>
                  <SimpleLineIcons
                    name="arrow-right"
                    size={10}
                  />
                </View>
                <Text>100-123-45687</Text>
              </View>
            </View>
            </TouchableOpacity>
            
        <Text
        style={styles.text}>예금주</Text>
        <TextInput
          backgroundColor={'white'}
          style={styles.textInput}
          onChangeText={(sender) => setSender(sender)}
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
export default MemoWriteScreen;
