import React, {useState, useCallback} from 'react';
import {useSelector} from 'react-redux';
import http from '../../utils/commonHttp';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign';
import {Button} from 'react-native-paper';

const BoardWriteScreen = ({navigation, route}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState({name: '', type: '', uri: ''});
  const memberId = useSelector(state => state.member.memberId);

  const onSubmit = () => {
    const board = {
      writer: memberId,
      affiliation: route.params.affiliation,
      title: title,
      content: content,
    };
    const formData = new FormData();
    formData.append('board', JSON.stringify(board), {type: 'application/json'});
    if (imageFile.name) formData.append('image', imageFile);
    http
      .post('board', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        console.log(JSON.stringify(response));
        navigation.navigate('Home');
      })
      .catch(error => {
        alert('asdAasd');
        console.log(error);
      });
  };

  const onSelectImage = () => {
    launchImageLibrary(
      {
        madiaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: true,
      },
      response => {
        if (response.didCancel) {
          return;
        } else if (response.errorCode) {
          console.log('Image Error : ' + response.errorCode);
        }
        setImageFile({
          name: response.assets[0].fileName,
          type: response.assets[0].type,
          uri: response.assets[0].uri,
        });
      },
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        // alignItems: 'center',
        paddingHorizontal: 40,
        paddingVertical: 10,
      }}
      style={{
        backgroundColor: '#FDF8E1',
      }}>
      <Text style={styles.text}>제목</Text>
      <TextInput
        backgroundColor={'white'}
        style={styles.textInput}
        onChangeText={title => setTitle(title)}
        placeholder="제목을 작성해주세요."
      />
      <Text style={styles.text}>내용</Text>
      <TextInput
        backgroundColor={'white'}
        multiline={true}
        style={styles.contentInput}
        onChangeText={content => setContent(content)}
        placeholder="내용을 작성해주세요."
      />
      <Text style={styles.text}>게시판 사진</Text>
      <Button
        icon="upload"
        mode="contained"
        borderRadius="5"
        textColor="#343434"
        buttonColor="#F3F3F3"
        onPress={() => onSelectImage()}>
        업로드 하기
      </Button>
      <Button
        style={{marginTop: 50}}
        icon="check"
        mode="contained"
        buttonColor="#A3C9B8"
        onPress={() => onSubmit()}>
        등록
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 60,
    padding: 10,
    borderRadius: 12,
    color: 'black',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
    marginTop: 20,
  },
  contentInput: {
    height: 150,
    padding: 10,
    paddingTop: 20,
    borderRadius: 12,
    textAlignVertical: 'top',
  },
  upload: {
    color: 'black',
    textAlign: 'center',
    marginLeft: 5,
  },
  submit: {
    color: '#496B73',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default BoardWriteScreen;
