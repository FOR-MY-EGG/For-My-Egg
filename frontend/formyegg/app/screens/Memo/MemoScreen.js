import React, { useEffect, useState } from 'react';
import { Text, View, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars/src/index';
import http from "../../utils/commonHttp";

const MemoScreen = ({ navigation }) => {
  const [memo, setMemo] = useState([]);

  useEffect(() => {
    http.get("memo")
    .then((res) => {
      setMemo(res.data);
    })
    .catch((err) => {

    })

    http
  }, [])
  return (
    <ScrollView
      style={{
        backgroundColor: '#FDF8E1',
        flex: 1,
      }}
    >
    <Calendar
        style={styles.calendar}
        monthFormat={'MMM, yyyy'}
        theme={{
          selectedDayBackgroundColor: 'red',
          dotColor: 'red',
          todayTextColor: '#AA715F',
          dayTextColor: '#FFA200',
          textDisabledColor: '#B3AC87',
          arrowColor: '#FFA200',
          textSectionTitleColor: '#B3AC87',
        }}
    />
      <View
        style={{
          backgroundColor: '#FAE588',
          margin: 20,
          marginTop: 30,
          borderRadius: 12,
          opacity: 0.7,
          padding: 15,
        }}
      >
      <Button title="글 작성하러 가기!" onPress={() => navigation.navigate('Write')} />
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginBottom: 10 }}>Today</Text>
        <View
          fillViewport="true"
        >
          <Image source={{ uri: 'http://news.samsungdisplay.com/wp-content/uploads/2018/08/SDC뉴스룸_사진8편_180806_도비라.png'}} 
            style={{ width: '100%', height: 300, marginBottom:10 }}
          /> 
          <Text style={{ fontSize: 15, color: 'black' }}>오늘은 꼬물이가 발차기를 하였다. 정말 멋지군아~! 꼬물꼬물아~@</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  calendar: {
    borderColor: 'red',
    alignContent: 'center',
    marginLeft: 12,
    marginRight: 12,
    marginTop: 5,
    backgroundColor: '#FDF8E1',
    borderRadius: 40,
  },
  container: {
    flex: 1,
    padding: 0,
    margin: 0
  },
  text: {
    fontSize: 42,
  },
});

export default MemoScreen;
