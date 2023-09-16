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
        // alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 600,
          textAlign: 'center',
          marginBottom: 5,
        }}>
        초대 코드 복사
      </Text>
      <Text style={{fontSize: 16, textAlign: 'center', marginBottom: 20}}>
        아래 초대코드를 공유하여 가족을 초대 해보세요
      </Text>
      <TouchableOpacity
        style={{
          marginHorizontal: 30,
          minHeight: 90,
          paddingHorizontal: 20,
          borderRadius: 5,
          backgroundColor: 'white',
          alignItems: 'center',
          flexDirection: 'row',
        }}
        onPress={() => {
          onCopyAddress(code);
        }}>
        <Clip name="clipboard" size={17} style={{flex: 1, textAlign: 'left'}} />
        <Text style={styles.upload}>{code}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  upload: {
    color: '#A3C9B8',
    flex: 9,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default FamilyScreen;
