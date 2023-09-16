import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from 'react-native';
import http from '../../utils/commonHttp';
import {format} from 'date-fns';
import { initChild } from '../../../reducers/childReducer';

const AccountInfo = ({navigation}) => {
  const child = useSelector(state => state.child);
  const [memo, setMemo] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("asd")
    // dispatch(initChild());
    http
      .get('memo/' + child.childId)
      .then(res => {
        setMemo(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <View style={{backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: '#FDF8E1',
          height: 200,
          justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <Text
          style={{
            // textDecorationLine: 'underline',
            fontSize: 15,
            textAlign: 'center',
            marginVertical: 10,
            fontWeight: 'bold',
          }}>
          {child.accountNickname}의 기록
        </Text>
        <Text style={{fontSize: 23, textAlign: 'center'}}>
          {child.accountBalance}원
        </Text>
      </View>
      {memo.map((m, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            height: 80,
            alignItems: 'center',

            paddingHorizontal: 20,
            borderBottomWidth: 0.5,
            borderColor: '#F0F0F0',
          }}>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'left',
              flex: 1,
              color: '#626262',
            }}>
            {format(new Date(m.day), 'MM.dd')}
          </Text>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'left',
              flex: 4,
              color: '#626262',
            }}>
            {m.holder}
          </Text>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'right',
              flex: 2,
              fontWeight: 'bold',
              color: '#A3C9B8',
            }}>
            {m.amount}원
          </Text>
        </View>
      ))}
    </View>
  );
};

export default AccountInfo;
