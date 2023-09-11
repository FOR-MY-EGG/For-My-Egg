import {Text, View, Button} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CardComponent from '../../components/Card';
import http from '../../utils/commonHttp';
import { useFocusEffect } from '@react-navigation/native';

const BoardType1Screen = ({navigation}) => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(0);

  const getData = async () => {
    http.get(`board/0?page=${page}`)
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
        createAt: "20202020", 
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
      }}>
      <Text style={styles.titleText}>임신! 🎉</Text>
      <FlatList data={cards} keyExtractor={(_) => _.title} style={styles.container} 
          renderItem={({ item }) => {
          const { title, content } = item;
            return (
              <CardComponent nickname={item.nickname}
              image={item.image} title={item.title}
              createdDate={item.createdDate} content={item.content}
              view={item.view}/>
            )
        }} 
        onEndReached={onEndReached}
        onEndReachedThreshold={0.6}
    />
      <Button title="글작성" onPress={() => navigation.navigate('Write')} />
      <Button title="채팅" onPress={() => navigation.navigate('Chat')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: 440
  },
  titleText: {
    fontSize: 20,
    width: 440,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    color: "gray",
    backgroundColor: 'white'
  }
});

export default BoardType1Screen;
