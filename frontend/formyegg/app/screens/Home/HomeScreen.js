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
import {Avatar, Button, Surface, Card} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import http from '../../utils/commonHttp';
import {useFocusEffect} from '@react-navigation/native';
import {setChild} from '../../../reducers/childReducer';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const memberId = useSelector(state => state.member.memberId);
  const [childs, setChilds] = useState([]);
  // const child = useSelector((state) => state.child);
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
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <MaterialCommunityIcons name="baby-bottle-outline" size={28} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginHorizontal: 5}}
                onPress={() => navigation.navigate('Alert')}>
                <MaterialCommunityIcons name="bell-outline" size={28} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Mypage')}>
                <MaterialIcons name="settings" size={28} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
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
                size={54}
                icon="heart"
                // color="yellow"
                backgroundColor="green"
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
                <Text>김싸피님의 육아적금</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  // alignSelf: 'center',
                }}>
                <Text>1000,000원</Text>
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
                    <Text style={{textAlign: 'center'}}>꼬물이</Text>
                  </View>
                  <View>
                    <Text style={{textAlign: 'center'}}>2023. 09. 13</Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text style={{textAlign: 'center', fontSize: 24}}>D-26</Text>
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
