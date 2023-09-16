import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    Text,
  } from 'react-native';
  import http from '../../utils/commonHttp';
  import {format} from 'date-fns';

const AccountInfo = ({navigation}) => {
  const child = useSelector((state) => state.child);
  const [memo, setMemo] = useState([]);

  useEffect(()=>{
    http.get("memo/"+child.childId)
    .then((res)=>{
      setMemo(res.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  })
  
  return (
    <View style={{backgroundColor: "white"}}>
      <View
      style={{backgroundColor: "#FDF8E1", height: 200, justifyContent: "center", alignItems: "center"}}
      >
        <Text
        style={{
          textDecorationLine : "underline",
          fontSize: 15
        }}
        >{child.accountNickname}의 기록</Text>
        <Text style={{fontSize: 23}}>{child.accountBalance}원</Text>
      </View>
      {memo.map((m, index) => (
          <View 
          key={index}
          style={{flexDirection: "row", height: 100}}>
            <View style={{flexDirection: "row"}}>
          <Text style={{fontSize: 17}}>{format(new Date(m.day), "MM.dd")}</Text>
          <Text style={{fontSize: 17}}>{m.holder}</Text>
          </View>
          <Text style={{fontSize: 17}}>{m.amount}원</Text>
          </View>
      ))
      }
      </View>
  );
};

export default AccountInfo;
