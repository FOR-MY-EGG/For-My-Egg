import React, { useEffect, useState} from 'react';
import {Text, View,  StyleSheet, TouchableOpacity, Alert, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { Avatar } from 'react-native-paper';
import shinhanAPI from '../../utils/shinhanAPI';
const AccountScreen = ({navigation}) => {
  const [accountData, setAccountData] = useState('');
  const [cardData, setCardData] = useState([]);
  const [number, setNumber] = useState('');
  const accountDataParcing = () =>{
    console.log(Object.keys(accountData))
    const cardData = [];
    for(let i = 1;i < Object.keys(accountData).length; i++){
      const replay_key = '반복횟수' + i;// 반복 횟수 조회 키  
      const part_key = '조회내역'+i; // 조회 내역 키  
      const replay = accountData[replay_key] // 반복 횟수 
      const content =  accountData[part_key] // 조회 내역 
      for(let j = 0; j < replay; j++){
        if(content[j].구분 == "예적금"){
          const search_type = "잔액(원화)"
          cardData.push({
            상품명: content[j]?.상품명,
            계좌번호: content[j]?.계좌번호,
            잔액: content[j]?.[search_type],
          });
        }
      }
    }
    setCardData(cardData);
  }
  const sendOneWon = async ()=>{
    const req = {			
      "dataHeader": {			
          "apikey": "2023_Shinhan_SSAFY_Hackathon"
      },			
      "dataBody": {			
          "입금은행코드": "088",
          "입금계좌번호": `"${number}"`,	
          "입금통장메모": "FOR_MY_EGG"
      }
    }			
    await shinhanAPI.post("auth/1transfer", req)
      .then(response => {
        console.log(response)
      })
  }
  const sentAccountNumber = async (number) => {
    setNumber(number);
    console.log(number)
    // 계좌 테이블 체크 후
    // if (exist)
    //
    //else
    
    
    await sendOneWon()
    Alert.alert(
      '해당 계좌로 1원이 이체되었습니다.',
      '계좌를 확인해 주세요',
      [
        {
          text: '닫기',
          onPress: () => {
          },
          style: 'destructive',
        },
      ],
   
    );

  }
  const fetchShinhanData = async () => {
    const req = {
      "dataHeader": {
       "apikey": "2023_Shinhan_SSAFY_Hackathon"
      },
      "dataBody": {
           "실명번호": "WmokLBDC09/yfin=="
      }
  }
    await shinhanAPI.post('account',req)
      .then(response => {setAccountData(response.data.dataBody)
        accountDataParcing()
      })
      .catch(error => console.error('Error:', error))
      .then()

  };
  useEffect(() => {
  }, [cardData]); 

   
  return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{width: '85%'}}>
          <Text style={{fontSize: 18, marginBottom: 10, marginLeft: 10}}>
            아이 정보를 입력해주세요.
          </Text>
        </View>
          <TextInput
            backgroundColor={'white'}
            style={styles.textInput}
            onChangeText={(name) => setName(name)}
            placeholder="아이의 이름을 적어주세요."
          />
          <TouchableOpacity
              style={{ 
                // margin: 15,
                height: 60,
                // padding: 10,
                borderRadius: 12,
                color: 'black',
                backgroundColor: 'white',
                flexDirection : 'row',
                justifyContent : 'center',
                alignItems: 'center',
                
              }}
              onPress = {() => fetchShinhanData()}
          > 
            <Text style={styles.upload}>계좌 조회</Text>
          </TouchableOpacity>
            <View style={styles.cardContainer}>
              {cardData.map((card, index) => (
                <TouchableOpacity onPress={() => sentAccountNumber(card.계좌번호)} key={index}>
                <View style={styles.card} >
                  <Avatar.Image style={{backgroundColor:'white', marginRight: 10}}
              size={43} source={require('../../assets/images/shinhan_logo.png')} />
                  <View>
                    <Text style={{fontSize: 16}}>{card.상품명}</Text>
                    <Text>계좌 번호:{card.계좌번호}</Text>
                    <Text>잔액: {card.잔액+'원'}</Text>
                    <View style={styles.iconContainer}>
                    <Icon name="chevron-right" size={16} color="#000" />
                  </View>
                  
                </View>
            </View>
          </TouchableOpacity>
              ))}
            </View>
        </ScrollView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    padding: 24,
  },
  
  iconContainer: {
    marginLeft: 'auto',
  },
  childItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  childName: {
    width: "100%",
    marginLeft: 10,
    fontSize: 17,
  },
  registerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  registerText: {
    marginLeft: 10,
    fontSize: 20,
  },

  registerButtonContainer: {
    marginBottom: 20, // 마진 추가
    alignItems: 'center'
  },
  upload : {
    color: 'black',
    textAlign: 'center',
    marginLeft: 5
  },
  cardContainer: {
    marginTop: 20,
    width: '100%',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    flexDirection: "row"
  },
});

export default AccountScreen;

