import React, { useEffect, useState } from 'react';
import { Text, View, Button, StyleSheet, Image, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import { Calendar } from 'react-native-calendars/src/index';
import http from "../../utils/commonHttp";

const MemoScreen = ({ navigation }) => {
  const {childId} = useSelector((state) => state.member);
  const [memo, setMemo] = useState([]);
  const [image, setImage] = useState('https://i.namu.wiki/i/ENBxmkOKfCOjIrkhtgFxEz-UCklQuPL_7Xr19tGBRxhQDzgFajHwf1wTH5kzdyJA23v91Nt5ZlqBcXz5aELP-RYKKmDP1JJhTAjFQh93_VapLVKW_Q4srtSbqht36pV8XyuONX78XRXiNZX7CM8wyA.webp');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [createDate, setCreateDate] = useState('');
  const now = new Date();

  useEffect(() => {
    updateTodayMemo();
  }, [])

  const updateTodayMemo = () => {
    setTitle('');
    http.get("memo/"+childId+"/today?month="+now.getMonth()+"&year="+now.getFullYear()+"&day="+now.getDate())
    .then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
      setImage(res.data.image);
      setCreateDate(res.data.createDate);
      console.log(res.data);
    })
    .catch((err) => {

    })
  }


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
        {!title ? (
            <Button title="글 작성하러 가기!" onPress={() => navigation.navigate('Write')} />
          ) : (
            <>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginBottom: 10 }}>{title}({createDate})</Text>
            <View
                fillViewport="true"
              >
                <Image source={{ uri: image }} 
                  style={{ width: '100%', height: 300, marginBottom:10 }}
                /> 
              <Text style={{ fontSize: 15, color: 'black' }}>content</Text>
           </View>
            </>
          )}
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
