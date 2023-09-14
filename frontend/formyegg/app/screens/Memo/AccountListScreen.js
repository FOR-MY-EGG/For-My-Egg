import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Avatar } from 'react-native-paper';

const AccountListScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 40,
        alignItems: 'center',
      }}>
    <View style={{width: '85%'}}>
        <Text style={{fontSize: 16, marginBottom: 10}}>출금할 계좌를 아래에서 선택해주세요.</Text>
    </View>

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
            marginBottom: 5
            }}
        >
            <View style={{flexDirection:'row', alignItems: 'center'}}>
            <Avatar.Image style={{backgroundColor:'white'}}
            size={43} source={require('../../assets/images/shinhan_logo.png')} />
              <View style={{marginLeft: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.upload}>신한 주거래 S20통장</Text>
                    </View>
                    <Text>110-123-45687</Text>
                </View>
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
            marginBottom: 5
            }}
        >
            <View style={{flexDirection:'row', alignItems: 'center'}}>
            <Avatar.Image style={{backgroundColor:'white'}}
            size={43} source={require('../../assets/images/shinhan_logo.png')} />
              <View style={{marginLeft: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.upload}>쏠편한 입출금 통장</Text>
                    </View>
                    <Text>110-789-12483</Text>
                </View>
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
            marginBottom: 5
            }}
            // onPress
        >
            <View style={{flexDirection:'row', alignItems: 'center'}}>
            <Avatar.Image style={{backgroundColor:'white'}}
            size={43} source={require('../../assets/images/shinhan_logo.png')} />
              <View style={{marginLeft: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.upload}>Hey Young(헤이영) 머니박스</Text>
                    </View>
                    <Text>110-593-67887</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    upload : {
      color: 'black',
      textAlign: 'center',
      marginTop: 5
    }
  })
export default AccountListScreen