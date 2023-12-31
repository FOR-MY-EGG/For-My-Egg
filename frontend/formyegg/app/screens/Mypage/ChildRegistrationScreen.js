import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import shinhanAPI from '../../utils/shinhanAPI';
import {Avatar} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';
import {Button} from 'react-native-paper';
import {useSelector} from 'react-redux';
import http from '../../utils/commonHttp';

const ChildRegistrationScreen = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [accountData, setAccountData] = useState('');
  const [cardData, setCardData] = useState([]);
  const [date, setDate] = useState(new Date());
  const [inputDate, setInputDate] = useState('');
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [number, setNumber] = useState('');
  const {groupId} = useSelector(state => state.member);

  useEffect(() => {
    fetchShinhanData(); // API 호출 함수
  }, []);

  const accountDataParcing = () => {
    const cardData = [];
    for (let i = 1; i < Object.keys(accountData).length; i++) {
      const replay_key = '반복횟수' + i; // 반복 횟수 조회 키
      const part_key = '조회내역' + i; // 조회 내역 키
      const replay = accountData[replay_key]; // 반복 횟수
      const content = accountData[part_key]; // 조회 내역
      for (let j = 0; j < replay; j++) {
        if (content[j].구분 == '예적금') {
          const search_type = '잔액(원화)';
          cardData.push({
            상품명: content[j]?.상품명,
            계좌번호: content[j]?.계좌번호,
            잔액: content[j]?.[search_type],
          });
        }
      }
    }
    setCardData(cardData);
  };

  const sentAccountNumber = number => {
    setNumber(number);
    handleModalClose();
  };
  const fetchShinhanData = async () => {
    const req = {
      dataHeader: {
        apikey: '2023_Shinhan_SSAFY_Hackathon',
      },
      dataBody: {
        실명번호: 'WmokLBDC09/yfin==',
      },
    };
    await shinhanAPI
      .post('account', req)
      .then(response => {
        setAccountData(response.data.dataBody);
        accountDataParcing();
      })
      .catch(error => console.error('Error:', error))
      .then();
  };
  const onSubmit = () => {
    const child = {
      name: name,
      birthDate: format(date, 'yyyy-MM-dd'),
      number: number,
      nickname: nickname,
    };
    console.log("groyupId"+groupId)
    http
      .post('child/' + groupId, child)
      .then(response => {
        navigation.goBack();
      })
      .catch(error => {
        alert('아이등록 실패');
        console.log(error);
      });
  };

  const toggleModal = () => {
    fetchShinhanData();
    setModalVisible(!isModalVisible);
  };

  const handleRegister = () => {
    toggleModal();
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 16, marginBottom: 20}}>
          아이 정보를 입력해주세요.
        </Text>
      </View>
      <TextInput
        backgroundColor={'white'}
        style={styles.textInput}
        onChangeText={name => setName(name)}
        placeholder="아이의 이름(태명)을 적어주세요."
      />
      <View style={styles.inputContainer}>
        <>
          {!inputDate ? (
            <TouchableOpacity
              style={{
                flex: 1,
                height: 60,
                borderRadius: 12,
                color: 'black',
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => setOpen(true)}>
              <Text style={styles.upload}>
                <MaterialCommunityIcons
                  name="calendar"
                  size={14}
                  color="#626262"
                />
                생일(출산 예정일) 선택하기
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                flex: 1,
                height: 60,
                borderRadius: 12,
                color: 'black',
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => setOpen(true)}>
              <Text style={styles.upload}>
                <MaterialCommunityIcons
                  name="calendar"
                  size={14}
                  color="#626262"
                />
                {format(inputDate, 'yyyy-MM-dd')}
              </Text>
            </TouchableOpacity>
          )}

          <DatePicker
            modal
            locale={'ko'}
            open={open}
            date={date}
            mode={'date'}
            textColor={'#626262'}
            title={'아이의 생일을 선택해주세요.'}
            cancelText="취소" // 원하는 취소 버튼 텍스트로 변경
            confirmText="확인"
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              setInputDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </>
      </View>
      <TouchableOpacity
        style={{
          height: 60,
          borderRadius: 12,
          color: 'black',
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          marginBottom: 20,
        }}
        onPress={handleRegister}>
        {!number ? (
          <Text style={styles.upload}>
            <MaterialCommunityIcons name="wallet" size={14} color="#626262" />
            기록통장 등록하기
          </Text>
        ) : (
          <Text style={styles.upload}>
            <MaterialCommunityIcons name="wallet" size={14} color="#626262" />
            기록통장: {number}
          </Text>
        )}
      </TouchableOpacity>
      <TextInput
        backgroundColor={'white'}
        style={styles.textInput}
        onChangeText={nickname => setNickname(nickname)}
        placeholder="기록통장의 별명을 적어주세요."
      />
      <Button
        style={{marginTop: 30, marginBottom: 160}}
        icon="check"
        mode="contained"
        buttonColor="#A3C9B8"
        onPress={() => onSubmit()}>
        등록
      </Button>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={styles.modalContainer}>
            <View style={[styles.modalContent, {height: 300}]}>
              <View style={styles.cardContainer}>
                {cardData.map((card, index) => (
                  <TouchableOpacity
                    onPress={() => sentAccountNumber(card.계좌번호)}
                    key={index}>
                    <View style={styles.card}>
                      <Avatar.Image
                        style={{backgroundColor: 'white', marginRight: 10}}
                        size={43}
                        source={require('../../assets/images/shinhan_logo.png')}
                      />
                      <View style={{flex: 1}}>
                        <Text style={{fontSize: 16}}>{card.상품명}</Text>
                        <Text>계좌 번호:{card.계좌번호}</Text>
                        <Text>잔액: {card.잔액 + '원'}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginHorizontal: 55,
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
    height: 500,
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
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  upload: {
    flex: 1,
    color: 'black',
    textAlign: 'center',
    marginLeft: 5,
    // width: "100%"
  },
  text: {
    textAlign: 'left',
    paddingLeft: 10,
    marginTop: 15,
  },
  textInput: {
    height: 60,
    padding: 10,
    borderRadius: 12,
    color: '#343434',
    marginBottom: 15,
  },
});

export default ChildRegistrationScreen;
