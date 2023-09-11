import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CardComponent from './components/Card';
import http from '../common/commonHttp';

export default function Board({affiliation, mainTitle}) {
  const [cards, setCards] = useState([{
    nickname: "김민태", 
    image: "https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png", 
    title: "yuyu", 
    view: 0,
    createAt: "20202020", 
    content: "이번에는 리액트 네이티브(React Native)로 인스타그램 UI을 구현하는 포스팅입니다. 다른 앱을 따라 만들어 보는 것은 굉장히 재미있습니다. 구글에서 인스타그램 클론 코딩 강의를 찾아보니, 다른 개발자들이 올린 동영상 강의를 몇 개 찾을 수 있었습니다."}]);
  const [page, setPage] = useState(0);

  const getData = async () => {
    http.get(`board/${0}?page=${page}`)
    .then((res) => {
      setCards((prev) => [...prev, ...res.data]);
    })
    .catch((err) => {
      alert(JSON.stringify(err));
    })
  }

  useEffect(() => {
    getData();
  }, [page])

  const onEndReached = async () => {
      setPage((prev) => prev+1);
  }

  return (
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
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }, 
});