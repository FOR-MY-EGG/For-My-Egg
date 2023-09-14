import React, { useState,useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import shinhanAPI from '../../utils/shinhanAPI';
import { Avatar } from 'react-native-paper';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const ChildRegistrationScreen = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [accountData, setAccountData] = useState('');
  const [cardData, setCardData] = useState([]);

  function formatDateToCustomString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
    return formattedDate;
  }
  useEffect(() => {
    // 모달이 열릴 때 API를 호출하여 데이터를 가져옴
    if (isModalVisible) {
      fetchShinhanData(); // API 호출 함수
    }
  }, [isModalVisible]);

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


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setSelectedDate(date);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleRegister = () => {
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.inputButton} onPress={showDatePicker}>
          <Text style={styles.inputButtonText}>생일 수정</Text>
        </TouchableOpacity>
        {selectedDate && (
          <Text style={styles.selectedDateText}>
            {formatDateToCustomString(selectedDate)}
          </Text>
        )}
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>기록통장 등록하기</Text>
      </TouchableOpacity>
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
    backgroundColor: '#FDF8E1'
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

});

export default ChildRegistrationScreen;
