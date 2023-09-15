import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar, Button} from 'react-native-paper';
import {RadioButton} from 'react-native-paper';

const AccountListScreen = () => {
  const [checked, setChecked] = React.useState('first');

  return (
    <View
      style={{
        flex: 1,
        marginTop: 40,
        alignItems: 'center',
      }}>
      <View style={{width: '85%'}}>
        <Text style={{fontSize: 16, marginBottom: 10}}>
          출금할 계좌를 아래에서 선택해주세요.
        </Text>
      </View>

      <TouchableOpacity
        style={{
          margin: 15,
          width: '85%',
          // flex: 1,
          height: 70,
          padding: 10,
          borderRadius: 12,
          color: 'black',
          backgroundColor: 'white',
          justifyContent: 'center',
          marginBottom: 5,
        }}
        onPress={() => setChecked('first')}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar.Image
            style={{backgroundColor: 'white'}}
            size={43}
            source={require('../../assets/images/shinhan_logo.png')}
          />
          <View style={{marginLeft: 10, flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.upload}>신한 주거래 S20통장</Text>
            </View>
            <Text>110-123-45687</Text>
          </View>
          <RadioButton
            value="first"
            uncheckedColor="#FAE588"
            color="#FAE588"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          margin: 15,
          width: '85%',
          height: 70,
          padding: 10,
          borderRadius: 12,
          color: 'black',
          backgroundColor: 'white',
          justifyContent: 'center',
          marginBottom: 5,
        }}
        onPress={() => setChecked('second')}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar.Image
            style={{backgroundColor: 'white'}}
            size={43}
            source={require('../../assets/images/shinhan_logo.png')}
          />
          <View style={{marginLeft: 10, flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.upload}>쏠편한 입출금 통장</Text>
            </View>
            <Text>110-789-12483</Text>
          </View>
          <RadioButton
            value="second"
            uncheckedColor="#FAE588"
            color="#FAE588"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          margin: 15,
          width: '85%',
          height: 70,
          padding: 10,
          borderRadius: 12,
          color: 'black',
          backgroundColor: 'white',
          justifyContent: 'center',
          marginBottom: 5,
        }}
        onPress={() => setChecked('third')}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar.Image
            style={{backgroundColor: 'white'}}
            size={43}
            source={require('../../assets/images/shinhan_logo.png')}
          />
          <View style={{marginLeft: 10, flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.upload}>Hey Young(헤이영) 머니박스</Text>
            </View>
            <Text>110-593-67887</Text>
          </View>
          <RadioButton
            value="third"
            uncheckedColor="#FAE588"
            color="#FAE588"
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('third')}
          />
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <Button
          style={{flex: 1, marginVertical: 15, marginHorizontal: 30}}
          icon="check"
          mode="contained-tonal"
          buttonColor="#FAE588"
          onPress={() => console.log('Pressed')}>
          완료
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  upload: {
    flexDirection: 'row',
    flex: 1,
    color: 'black',
  },
});
export default AccountListScreen;
