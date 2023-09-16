import React, {useCallback, useEffect, useState} from 'react';
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
import { setChild} from '../../../reducers/childReducer';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const memberId = useSelector(state => state.member.memberId);
  const [childs, setChilds] = useState([]);
  const child = useSelector(state => state.child);
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [tmpCheck, setTmpCheck] = useState(0);

  const selectChild = () => {
    let tmpC = null;
    for(let c of childs) {
      if(c.childId == tmpCheck) {
        tmpC = c;
      }
    }
    dispatch(setChild(tmpC));
    hideModal();
  };

  const cancelChild = () => {
    setTmpCheck(child.childId);
    hideModal();
  };

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
          console.log(children)
          if (children.length > 0) { 
            for(let chi of children) {
              let pChi = parseInt(chi.dday);
              if(pChi >= 0) {
                  if(Math.abs(pChi) > 180) chi.weeks = "https://formyegg-bucket.s3.ap-northeast-2.amazonaws.com/eggs/egg1.GIF";
                  else if(Math.abs(pChi) > 80) chi.weeks = "https://formyegg-bucket.s3.ap-northeast-2.amazonaws.com/eggs/egg2.GIF";
                  else chi.weeks = "https://formyegg-bucket.s3.ap-northeast-2.amazonaws.com/eggs/egg3.GIF";
              } else {
                  if(Math.abs(pChi) < 80) chi.weeks = "https://formyegg-bucket.s3.ap-northeast-2.amazonaws.com/eggs/egg3.GIF";
                  else if(Math.abs(pChi) < 180) chi.weeks = "https://formyegg-bucket.s3.ap-northeast-2.amazonaws.com/eggs/egg4.GIF";
                  else chi.weeks = "https://formyegg-bucket.s3.ap-northeast-2.amazonaws.com/eggs/egg5.GIF";
              }
            }
            console.log(children)
            setChilds(children);
            if(child.childId == 0) {
              dispatch(setChild(children[0]));
              setTmpCheck(children[0].childId);
            } 
          }
        })
        .catch(err => {});
    }, []),
  );

  useEffect(() => {
    if(childs.length > 0) {
      let tmpC = null;
      for(let c of childs) {
        if(c.childId == child.childId) {
          tmpC = c;
        }
      }
      setTmpCheck(tmpC.childId);
      dispatch(setChild(tmpC));
    }
  }, [childs])
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
                    status={tmpCheck == c.childId ? 'checked' : 'unchecked'}
                    onPress={() => setTmpCheck(c.childId)}
                  />
                  <TouchableOpacity
                    onPress={() => setTmpCheck(c.childId)}
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
                onPress={() => cancelChild()}>
                취소
              </Button>
              <Button
                // icon="camera"
                mode="text"
                onPress={() => selectChild()}>
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
          {childs.length > 0 ? (
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
                    {child.accountNickname}
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
                    {child.accountBalance}원
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => navigation.navigate('ChildRegist')}
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
                <Text>아이 등록하러 가기</Text>
              </View>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.box}
            elevation={1}
            onPress={() => navigation.navigate('Information')}>
            <Text>메모추가</Text>
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
            {childs.length > 0 ? (
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
                        {child.name}
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
                        {child.dday > 0 ? '출산 예정일' : '생일'}
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
                        {new String(child.birthDate).substring(0, 10)}
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
                      D{parseInt(child.dday) < 0 ? '+' : '-'}
                      {Math.abs(child.dday)}
                      {/* 출산 예정일이거나 생일이다. */}
                    </Text>
                  </View>
                </View>
                <View />
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
                  }}
                  // source={{uri: child.egg}}
                  source = {{uri: child.weeks}}
                />
                {console.log(child)}
              </View>
            </View> )
            : <View />
            }
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.product}
              elevation={1}
              onPress={() => navigation.navigate('product')}>
              <Text>금융 상품</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.policy}
              elevation={1}
              onPress={() => navigation.navigate('policy')}>
              <Text>육아정책</Text>
            </TouchableOpacity>
          </View>
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
  box: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowRadius: 10,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
    flex: 1,
  },
  product: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowRadius: 10,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
    flex: 1,
    marginRight: 10,
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
    flex: 1,
    marginLeft: 10,
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
