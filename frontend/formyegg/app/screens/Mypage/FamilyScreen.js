import React, {useEffect, useState} from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Clip from 'react-native-vector-icons/Entypo';
import http from '../../utils/commonHttp';
import Clipboard from '@react-native-clipboard/clipboard';

const FamilyScreen = ({navigation}) => {
  const [code, setCode] = useState('');
  const onCopyAddress = async code => {
    try {
      await Clipboard.setString(code);
    } catch (e) {
      console.log('실패');
    }
  };

  useEffect(() => {
    http
      .get('group/group-code')
      .then(res => {
        console.log(res.data);
        setCode(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20}}>아래에 초대코드를 공유하여</Text>
      <Text style={{fontSize: 20, marginBottom: 10}}>
        {' '}
        가족을 초대할 수 있습니다
      </Text>
      <TouchableOpacity
        style={{
          width: '85%',
          height: 60,
          borderRadius: 12,
          color: 'black',
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
        onPress={() => {
          onCopyAddress(code);
        }}>
        <Clip name="clipboard" size={17} />
        <Text style={styles.upload}>{code}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  upload: {
    color: 'black',
    textAlign: 'center',
    marginLeft: 5,
    fontSize: 13,
    // width: "100%"
  },
});

export default FamilyScreen;
