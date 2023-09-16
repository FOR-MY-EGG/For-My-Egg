import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Text} from 'react-native';
import http from '../../utils/commonHttp';
import {format} from 'date-fns';

const AccountInfo = ({navigation}) => {
  const child = useSelector(state => state.child);
  const [memo, setMemo] = useState([
    {
      day: '2023-09-16',
      holder: '민티 오늘 뒤집기 성공',
      amount: 10000,
      memoId: 1,
    },
    {
      day: '2023-09-17',
      holder: '민티야 오늘도 행복해라',
      amount: 10000,
      memoId: 1,
    },
    {
      day: '2023-09-18',
      holder: '민티야 내일도 행복해라',
      amount: 10000,
      memoId: 1,
    },
    {
      day: '2023-09-19',
      holder: '민티야 오늘도 즐거워라',
      amount: 10000,
      memoId: 1,
    },
    {
      day: '2023-09-20',
      holder: '민티야 쑥쑥 자라자',
      amount: 10000,
      memoId: 1,
    },
  ]);

  // useEffect(() => {
  //   http
  //     .get('memo/' + child.childId)
  //     .then(res => {
  //       setMemo(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // });

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
