import {Text, View, Button, TouchableOpacity, Image} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CardComponent from '../../components/Card';
import http from '../../utils/commonHttp';
import { useFocusEffect } from '@react-navigation/native';

const BoardType3Screen = ({navigation}) => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(0);

  const getData = async () => {
    http.get(`board/1?page=${page}`)
    .then((res) => {
      setCards((prev) => [...prev, ...res.data]);
    })
    .catch((err) => {
      alert(JSON.stringify(err));
    })
  }

  useFocusEffect(
    useCallback(() => {
      setPage(0);
      setCards([{
        nickname: "김민태", 
        image: "https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png", 
        title: "yuyu", 
        view: 0,
        createAt: "2020-03-20 13:00", 
        content: "이번에는 리액트 네이티브(React Native)로 인스타그램 UI을 구현하는 포스팅입니다. 다른 앱을 따라 만들어 보는 것은 굉장히 재미있습니다. 구글에서 인스타그램 클론 코딩 강의를 찾아보니, 다른 개발자들이 올린 동영상 강의를 몇 개 찾을 수 있었습니다."}]);
    }, [])
  );

  useEffect(() => {
    getData();
  }, [page])

  const onEndReached = async () => {
      setPage((prev) => prev+1);
  }
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
      }}>
      
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.titleText}>산후조리 정보! 🎉</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Write')}>
          <Image style={styles.button} source={{ uri: "https://formyegg-bucket.s3.ap-northeast-2.amazonaws.com/write.png" }}></Image>
        </TouchableOpacity>
      </View>
        <TouchableOpacity  onPress={() => navigation.navigate('Chat',{affiliation: 2})}>
          <Image style={styles.chat} source={{ uri: "https://formyegg-bucket.s3.ap-northeast-2.amazonaws.com/chat.png" }}></Image>
        </TouchableOpacity>
      
      <FlatList data={cards} keyExtractor={(_) => _.title} style={styles.container} 
          renderItem={({ item }) => {
          const { title, content } = item;
            return (
              <CardComponent nickname={item.nickname}
              image={item.image} title={item.title}
              createdDate={item.createdDate} content={item.content}
              view={item.view} profile="https://formyegg-bucket.s3.ap-northeast-2.amazonaws.com/222.jpeg"/>
            )
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
    backgroundColor: 'white',
    width: 440
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
    fontWeight: "bold",
    width: 220,
    justifyContent: 'center',
    textAlign: 'center',
    paddingBottom: 5,
    color: "black",
    backgroundColor: 'white'
  },
  chat: {
    display: 'flex',
    width: 150,
    marginBottom: 10,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default BoardType3Screen;