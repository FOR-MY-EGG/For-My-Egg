import React, {useCallback, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {setMember} from '../../../reducers/memberReducer';
import {useDispatch, useSelector} from 'react-redux';
import {
  Avatar,
  Modal,
  Portal,
  RadioButton,
  Button,
  IconButton,
  MD3Colors,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import http from '../../utils/commonHttp';
import {useFocusEffect} from '@react-navigation/native';
import {setChild} from '../../../reducers/childReducer';
import {red100} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const memberId = useSelector(state => state.member.memberId);
  const [childs, setChilds] = useState([]);
  // const child = useSelector((state) => state.child);

  const [visible, setVisible] = React.useState(false);
  const [checked, setChecked] = React.useState(0);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    margin: 30,
  };
  useFocusEffect(
    useCallback(() => {
      http
        .get(`member/all/${memberId}`)
        .then(res => {
          let children = res.data.children;
          if (children.length > 0) {
            setChilds(children);
            dispatch(setChild(children[0]));
          }
        })
        .catch(err => {});
    }, []),
  );
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>아이 선택</Text>
            <Text>아이를 선택해주세요.</Text>
            
            <View
              style={{
                borderBottomColor: 'gray',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginVertical: 10,
              }}
            />
            
            <View>
              {childs.map((c, index) => (
                <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <RadioButton
                  style={{flex: 3}}
                  value={index}
                  color="yellowgreen"
                  status={checked == index ? 'checked' : 'unchecked'}
                  onPress={() => setChecked(index)}
                />
                <TouchableOpacity
                  onPress={() => setChecked(index)}
                  style={{
                    flex: 1,
                    // backgroundColor: 'red',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      // flex: 1,
                      // backgroundColor: 'red',
                      // alignSelf: 'center',
                      textAlign: 'left',
                    }}>
                      {c.name}
                  </Text>
                </TouchableOpacity>
                
              </View>
              ))}
{/*               
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <RadioButton
                  value="second"
                  color="yellowgreen"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('second')}></RadioButton>
                <TouchableOpacity
                  onPress={() => setChecked('second')}
                  style={{
                    flex: 1,
                    // backgroundColor: 'red',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      // flex: 1,
                      // backgroundColor: 'red',
                      // alignSelf: 'center',
                      textAlign: 'left',
                    }}>
                    초롱이
                  </Text>
                </TouchableOpacity>
              </View> */}
            </View>
            
            <View
              style={{
                flexDirection: 'row',
                // alignContent: 'flex-end',
                alignSelf: 'flex-end',
              }}>
              <Button
                style={{marginRight: 10}}
                // icon="camera"
                mode="text"
                onPress={() => console.log('Pressed')}>
                취소
              </Button>
              <Button
                // icon="camera"
                mode="text"
                onPress={() => console.log('Pressed')}>
                확인
              </Button>
            </View>
          </Modal>
        </Portal>
        <ScrollView style={styles.scrollView}>
          <View
            style={{
              height: 50,
              // backgroundColor: 'green',
              borderRadius: 10,
              marginBottom: 10,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity onPress={showModal}>
                <MaterialCommunityIcons
                  name="baby-face-outline"
                  size={28}
                  color="#84AFA7"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginHorizontal: 15}}
                onPress={() => navigation.navigate('Alert')}>
                <MaterialCommunityIcons
                  name="bell-outline"
                  size={28}
                  color="#84AFA7"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Mypage')}>
                <MaterialIcons name="settings" size={28} color="#84AFA7" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('AccountInfo')}
            style={{
              height: 100,
              backgroundColor: 'white',
              borderRadius: 10,
              marginBottom: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 2,
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Avatar.Icon
                size={48}
                icon="heart"
                // color="yellow"
                backgroundColor="#A2C6C3"
              />
            </View>
            <View
              style={{
                flex: 3,
                borderRadius: 10,
                flexWrap: 'wrap',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <Text style={{fontSize: 15, color: '#343434'}}>
                  김싸피님의 육아적금(통장별칭)
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  // alignSelf: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#343434',
                    fontWeight: 700,
                    marginTop: 5,
                  }}>
                  100,000원(잔액)
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              // height: 100,
              backgroundColor: 'white',
              borderRadius: 10,
              // borderTopLeftRadius: 10,
              marginBottom: 20,
              flexDirection: 'row',
              elevation: 2,
              paddingHorizontal: 40,
            }}>
            <View
              style={{flex: 1, flexDirection: 'column', paddingVertical: 20}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flex: 3,
                    flexDirection: 'column',
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}>
                  <View>
                    <Text
                      style={{
                        textAlign: 'left',
                        fontSize: 17,
                        color: '#A3CFB8',
                        fontWeight: 700,
                      }}>
                      꼬물이(아이이름)
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        // flex: 1,
                        fontSize: 14,
                        textAlign: 'right',
                      }}>
                      {true ? '출산 예정일' : '생일'}
                    </Text>
                    <Text
                      style={{
                        flex: 1,
                        textAlign: 'left',
                        fontSize: 15,
                        color: '#343434',
                        fontWeight: 700,
                        marginHorizontal: 10,
                      }}>
                      2023. 09. 13
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      textAlign: 'right',
                      fontSize: 24,
                      color: '#343434',
                      fontWeight: 700,
                    }}>
                    D-26
                    {/* 출산 예정일이거나 생일이다. */}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  // alignContent: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginTop: 20,
                  // borderRadius: 150,
                }}>
                <Image
                  style={{
                    width: 300,
                    height: 300,
                    alignContent: 'center',
                    justifyContent: 'center',
                    resizeMode: 'cover',
                    overflow: 'hidden',
                  }}
                  source={{uri: 'https://picsum.photos/700'}}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.policy}
            elevation={1}
            onPress={() => navigation.navigate('Information')}>
            <Text>메모추가</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.policy}
            elevation={1}
            onPress={() => navigation.navigate('Information')}>
            <Text>육아정책</Text>
          </TouchableOpacity>

          {/*
        <Button
          title="로그아웃"
          onPress={() =>
            dispatch(
              setMember({
                token: '',
                memberId: 0,
                isMember: 0,
                nickname: '',
              }),
            )
          }
        /> */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  balance: {
    height: 100,
    justifyContent: 'center',
    shadowRadius: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  memo: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  policy: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowRadius: 10,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
  },
  baby: {
    height: 450,
    borderRadius: 10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    paddingTop: 10,
    backgroundColor: '#FDF8E1',
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 10,
    marginTop: 0,
  },
});

export default HomeScreen;
