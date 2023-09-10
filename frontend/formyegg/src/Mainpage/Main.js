import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import NavigationService from '../common/NavigationService';
import {useDispatch} from 'react-redux';
import {setName} from '../../reducers/memberReducer';
import {Text as T} from 'galio-framework';
import BottomTab from '../common/BottomBar';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    alert('이름 ㅎㅇ');
    dispatch(setName('김민태'));
  }, []);

  return (
    <>
      <BottomTab />
      <TouchableOpacity
        onPress={() =>
          NavigationService.navigate('LoginScreen', {
            screen: 'LoginScreen',
            info: 'information',
          })
        }
        style={{
          justifyContent: 'flex-end',
          backgroundColor: 'rgb(100,100,100)',
          padding: 20,
          marginTop: 20,
          borderRadius: 30,
        }}>
        {/* <Text>Hi~ Home~</Text> */}
        <View>
          <T p muted>
            Hi, I'm a Galio component!!
          </T>
          <Text>text</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
