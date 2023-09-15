import {Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import CardComponent from '../../components/Card';
import http from '../../utils/commonHttp';
import {useFocusEffect} from '@react-navigation/native';
import {Button} from 'react-native-paper';

const BoardType1Screen = ({navigation}) => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(0);

  const getData = async () => {
    http
      .get(`board/0?page=${page}`)
      .then(res => {
        setCards(prev => [...prev, ...res.data]);
      })
      .catch(err => {
        alert(JSON.stringify(err));
      });
  };

  useFocusEffect(
    useCallback(() => {
      setPage(0);
      setCards([
        {
          nickname: '김민태',
          image:
            'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png',
          title: '글 제목이다',
          view: 0,
          createdDate: '2020-03-20 13:00',
          content:
            '이번에는 리액트 네이티브(React Native)로 인스타그램 UI을 구현하는 포스팅입니다. 다른 앱을 따라 만들어 보는 것은 굉장히 재미있습니다. 구글에서 인스타그램 클론 코딩 강의를 찾아보니, 다른 개발자들이 올린 동영상 강의를 몇 개 찾을 수 있었습니다.',
        },
      ]);
    }, []),
  );

  useEffect(() => {
    getData();
  }, [page]);

  const onEndReached = async () => {
    setPage(prev => prev + 1);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FDF8E1',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'flex-end',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          alignSelf: 'flex-end',
          marginVertical: 10,
        }}>
        <Button
          textColor="white"
          buttonColor="#A2C6C3"
          icon="pencil"
          mode="elevated"
          onPress={() => navigation.navigate('Write', {affiliation: 0})}>
          글 작성
        </Button>
        <Button
          textColor="white"
          buttonColor="#A3C9B8"
          // rippleColor="#A3C9B8"
          // backgroundColor="#A3C9B8"
          icon="chat"
          mode="elevated"
          style={{marginHorizontal: 5}}
          onPress={() => navigation.navigate('Chat', {affiliation: 0})}>
          채팅
        </Button>
      </View>
      <FlatList
        data={cards}
        keyExtractor={_ => _.title}
        style={styles.container}
        renderItem={({item}) => {
          const {title, content} = item;
          return (
            <CardComponent
              nickname={item.nickname}
              image={item.image}
              title={item.title}
              createdDate={item.createdDate}
              content={item.content}
              view={item.view}
              profile="https://formyegg-bucket.s3.ap-northeast-2.amazonaws.com/1425160.png"
            />
          );
        }}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    // backgroundColor: '#FDF8E1',
    // width: 440,
  },
  button: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    marginLeft: 80,
    fontSize: 25,
    fontWeight: 'bold',
    width: 220,
    justifyContent: 'center',
    textAlign: 'center',
    paddingBottom: 5,
    color: 'black',
    backgroundColor: '#FDF8E1',
  },
  chat: {
    display: 'flex',
    width: 150,
    marginBottom: 10,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BoardType1Screen;
