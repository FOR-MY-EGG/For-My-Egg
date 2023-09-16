import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useDispatch, useSelector} from 'react-redux';
import {Avatar} from 'react-native-paper';
import http from '../../utils/commonHttp';
import {Button} from 'react-native-paper';

const MemoWriteScreen = ({navigation}) => {
  const childId = useSelector(state => state.child.childId);
  const {token} = useSelector(state => state.member);
  const {accountTitle} = useSelector(state => state.account);
  const {number} = useSelector(state => state.account);

  const [sender, setSender] = useState('');
  const [transfer, setTransfer] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [response, setResponse] = useState('');
  const [imageFile, setImageFile] = useState({name: '', type: '', uri: ''});

  const onSubmit = () => {
    const memoReqDto = {
      childId: childId,
      sender: sender,
      amount: transfer,
      title: title,
      content: content,
    };
    const formData = new FormData();
    formData.append('memoReqDto', JSON.stringify(memoReqDto), {
      type: 'application/json',
    });
    if (imageFile.name) formData.append('image', imageFile);
      http
        .post('memo', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(response => {
          console.log(JSON.stringify(response));
          console.log('memo upload success');
          navigation.goBack();
        })
      .catch(error => {});
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
        console.log(response);
        if (response.didCancel) {
          return;
        } else if (response.errorCode) {
          console.log('Image Error : ' + response.errorCode);
        }

        setResponse(response);
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
        flexGrow: 1,
        paddingHorizontal: 45,
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
      style={{
        backgroundColor: '#FDF8E1',
      }}>
      <Text marginTop={20} style={styles.text}>
        출금 통장
      </Text>
      <TouchableOpacity
        style={{
          height: 60,
          padding: 10,
          borderRadius: 12,
          color: 'black',
          backgroundColor: 'white',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('AccountList')}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar.Image
            style={{backgroundColor: 'white'}}
            size={43}
            source={require('../../assets/images/shinhan_logo.png')}
          />
          <View style={{marginLeft: 10, flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  // backgroundColor: 'green',
                  flexDirection: 'row',
                  flex: 1,
                  color: 'black',
                }}>
                {accountTitle + ' '}
                <SimpleLineIcons name="arrow-right" size={10} />
              </Text>
            </View>
            <View>
              <Text>{number}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <Text style={styles.text}>예금주</Text>
      <TextInput
        backgroundColor={'white'}
        style={styles.textInput}
        onChangeText={sender => setSender(sender)}
        placeholder="통장에 남길 한마디를 적어주세요."
      />
      <Text style={styles.text}>입금액</Text>
      <TextInput
        textAlign="right"
        backgroundColor={'white'}
        style={styles.textInput}
        onChangeText={transfer => setTransfer(transfer)}
      />
      <Text style={styles.text}>제목</Text>
      <TextInput
        backgroundColor={'white'}
        style={styles.textInput}
        onChangeText={title => setTitle(title)}
        placeholder="메모의 제목을 작성해주세요."
      />
      <Text style={styles.text}>내용</Text>
      <TextInput
        backgroundColor={'white'}
        multiline={true}
        style={styles.contentInput}
        onChangeText={content => setContent(content)}
        placeholder="내용을 작성해주세요."
      />
      <Text style={styles.text}>사진</Text>
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
        style={{marginVertical: 50}}
        icon="check"
        mode="elevated"
        buttonColor="#A3C9B8"
        textColor="#F3F3F3"
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
    color: '#343434',
  },
  text: {
    flex: 1,
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
    // color: '#343434',
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
export default MemoWriteScreen;
