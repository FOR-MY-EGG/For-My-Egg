import React, {useCallback, useEffect, useState} from 'react';
import {format} from 'date-fns';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {Calendar, LocaleConfig} from 'react-native-calendars/src/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import http from '../../utils/commonHttp';
import {Button} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';

LocaleConfig.locales['kr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['월', '화', '수', '목', '금', '토', '일'],
  today: '오늘',
};

LocaleConfig.defaultLocale = 'kr';

const MemoScreen = ({navigation}) => {
  const childId = useSelector(state => state.child.childId);
  const [memo, setMemo] = useState({});
  const [today, setToday] = useState({
    title: '',
    content: '',
    createDate: '',
    image:
      'https://i.namu.wiki/i/ENBxmkOKfCOjIrkhtgFxEz-UCklQuPL_7Xr19tGBRxhQDzgFajHwf1wTH5kzdyJA23v91Nt5ZlqBcXz5aELP-RYKKmDP1JJhTAjFQh93_VapLVKW_Q4srtSbqht36pV8XyuONX78XRXiNZX7CM8wyA.webp',
  });

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  const markedSelectedDates = {
    ...memo,
    [selectedDate]: {
      selected: true,
      marked: memo[selectedDate]?.marked,
    },
  };
  const changeDay = day => {
    setSelectedDate(day);
    updateTodayMemo(day);
  };
  useFocusEffect(
    useCallback(() => {
      http
        .get('memo/' + childId)
        .then(res => {
          console.log(res.data);
          for (let m of res.data) {
            memo[m.day] = {marked: true};
          }
          console.log(memo);
        })
        .catch(err => {});
      updateTodayMemo(format(new Date(), 'yyyy-MM-dd'));
    }, []),
  );

  const updateTodayMemo = now => {
    today.title = '';
    http
      .get('memo/' + childId + '/today?date=' + now)
      .then(res => {
        setToday(res.data);
        console.log(res.data);
      })
      .catch(err => {});
  };

  return (
    <ScrollView
      style={{
        backgroundColor: '#FDF8E1',
        flex: 1,
      }}>
      <Calendar
        markedDates={markedSelectedDates}
        style={styles.calendar}
        format
        monthFormat={'MMM, yyyy'}
        locale={'ko'}
        theme={{
          selectedDayBackgroundColor: '#FCEFB4',
          dotColor: '#FFA200',
          todayTextColor: '#FFA200',
          dayTextColor: '#FFA200',
          textDisabledColor: '#B3AC87',
          arrowColor: '#FFA200',
          textSectionTitleColor: '#B3AC87',
        }}
        onDayPress={day => {
          changeDay(day.dateString);
        }}
      />

      {!today.title ? (
        <View style={{alignContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 15,
            }}>
            <MaterialCommunityIcons name="note-edit-outline" size={32} />
            <View style={{marginLeft: 10}}>
              <Text style={{color: '#7E7855', fontSize: 16}}>
                오늘의 메모를 남기지 않았어요.
              </Text>
              <Text style={{color: '#7E7855', fontSize: 16}}>
                남기러 가볼까요?💕
              </Text>
            </View>
          </View>
          <Button
            style={{flex: 1, marginHorizontal: 30, marginBottom: 10}}
            icon="check"
            mode="elevated"
            buttonColor="#FAE588"
            textColor="#626262"
            onPress={() => navigation.navigate('Write')}>
            오늘의 메모 작성하기
          </Button>
        </View>
      ) : (
        <>
          <View
            style={{
              backgroundColor: '#FAE588',
              margin: 20,
              marginTop: 30,
              borderRadius: 10,
              opacity: 0.7,
              padding: 20,
            }}>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <Text
                style={{
                  flex: 1,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#434343',
                }}>
                {today.title}
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#434343',
                  textAlign: 'right',
                }}>
                {today.createDate}
              </Text>
            </View>
            <View
              fillViewport="true"
              style={{backgroundColor: 'white', padding: 10, borderRadius: 10}}>
              {today.image && (
                <Image
                  source={{uri: today.image}}
                  style={{width: '100%', height: 300, marginBottom: 10}}
                />
              )}
              <Text style={{fontSize: 15, color: 'black'}}>
                {today.content}
              </Text>
            </View>
          </View>
        </>
      )}
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
    margin: 0,
  },
  text: {
    fontSize: 42,
  },
});

export default MemoScreen;
