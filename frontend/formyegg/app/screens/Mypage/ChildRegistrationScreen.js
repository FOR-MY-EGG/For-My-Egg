import React, { useState,useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Calendar from 'react-native-vector-icons/Entypo';
import Account from 'react-native-vector-icons/MaterialIcons';
import shinhanAPI from '../../utils/shinhanAPI';
import { Avatar } from 'react-native-paper';
import DatePicker from 'react-native-date-picker'
import {format} from 'date-fns';

const ChildRegistrationScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [accountData, setAccountData] = useState('');
  const [cardData, setCardData] = useState([]);
  const [date, setDate] = useState(new Date())
  const [inputDate, setInputDate] = useState('');
  const [open, setOpen] = useState(false)

  useEffect(() => {
      fetchShinhanData(); // API 호출 함수
  }, []);

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
    console.log(cardData)
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
        console.log(accountData)
        accountDataParcing()
      })
      .catch(error => console.error('Error:', error))
      .then()
  };


  const toggleModal = () => {
    console.log(4);
    fetchShinhanData();
    setModalVisible(!isModalVisible);
  };

  const handleRegister = () => {
    console.log(5);
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <View style={{width: '85%'}}>
        <Text style={{fontSize: 16, marginBottom: 10}}>
          아이 정보를 입력해주세요.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        
            <>
            {!inputDate ? (
        <TouchableOpacity
        style={{ 
          width: '85%',
          height: 60,
          borderRadius: 12,
          color: 'black',
          backgroundColor: 'white',
          flexDirection : 'row',
          justifyContent : 'center',
          alignItems: 'center'
        }}
        onPress={()=> setOpen(true)}
    > 
        <Calendar
          name="calendar"
          size={17}
        />
      <Text style={styles.upload}>생일 선택하기</Text>
    </TouchableOpacity>
      ) : (
        <TouchableOpacity
                style={{ 
                  width: '85%',
                  height: 60,
                  borderRadius: 12,
                  color: 'black',
                  backgroundColor: 'white',
                  flexDirection : 'row',
                  justifyContent : 'center',
                  alignItems: 'center'
                }}
                onPress={()=> setOpen(true)}
            > 
            
                <Calendar
                  name="calendar"
                  size={17}
                />
              <Text style={styles.upload}>{format(inputDate, "yyyy-MM-dd")}</Text>
              </TouchableOpacity>
      )}
              
          <DatePicker
            modal
            locale={"ko"}
            open={open}
            date={date}
            mode={"date"}
            textColor={"black"}
            onConfirm={(date) => {

              console.log(date);
              setOpen(false)
              setDate(date)
              setInputDate(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />
      </>
      </View>
      <TouchableOpacity
                style={{ 
                  width: '85%',
                  height: 60,
                  borderRadius: 12,
                  color: 'black',
                  backgroundColor: 'white',
                  justifyContent : 'center',
                  alignItems: 'center',
                  flexDirection : 'row'
                }}
                onPress={handleRegister}
            > 
            
                <Account
                  name="account-balance-wallet"
                  size={17}
                />
              <Text style={styles.upload}>기록통장 등록하기</Text>
            </TouchableOpacity>
      
      
      {/* 통장 모달  */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={toggleModal}
              style={styles.closeButton}
            >
              <Icon name="close" size={25} color="black" />
            </TouchableOpacity>
            
            <View style={styles.cardContainer}>
              
              {cardData.map((card, index) => (
                
                <View style={styles.card} key={index} >
                  <Avatar.Image style={{backgroundColor:'white'}}
              size={43} source={require('../../assets/images/shinhan_logo.png')} />
                  <Text>상품명: {card.상품명}</Text>
                  <Text>계좌번호: {card.계좌번호}</Text>
                  <Text>잔액: {card.잔액}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    alignItems: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputButton: {
    backgroundColor: '#FFDD77',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  inputButtonText: {
    color: 'white',
  },
  selectedDateText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FFDD77',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#EBEBEB',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    height:500
  },
  modalText: {
    marginBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'blue',
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
  },
  upload : {
    color: 'black',
    textAlign: 'center',
    marginLeft: 5,
  }

});

export default ChildRegistrationScreen;
