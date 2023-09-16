import {Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import CardComponent from '../../components/Card';
import http from '../../utils/commonHttp';
import {useFocusEffect} from '@react-navigation/native';
import {Button} from 'react-native-paper';

const BoardType2Screen = ({navigation}) => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(0);
  console.log(page);
  const getData = () => {
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
      http
      .get(`board/1?page=${page}`)
      .then(res => {
        setCards(prev => [{
          nickname: '관리자',
          image:
            '',
          title: '공지사항입니다.',
          view: 0,
          createdDate: '2020-03-20 13:00',
          content:
            '여러분들 이 게시판은 FOR MY EGG의 정보공유 커뮤니티입니다. 여러분들의 의견을 자유롭게 펼치시고 게시글 및 채팅을 통해 서로 의견을 나눠보세요. 그럼 화이팅',
        }, ...res.data]);
      })
      .catch(err => {
        alert(JSON.stringify(err));
      });
      return () => {
        setCards([]);
        setPage(0);
      }
    }, []),
  );

  useEffect(() => {
    if(page != 0) {
      getData();
    }
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
          onPress={() => navigation.navigate('Write', {affiliation: 1})}>
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
          onPress={() => navigation.navigate('Chat', {affiliation: 1})}>
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
              profile="https://formyegg-bucket.s3.ap-northeast-2.amazonaws.com/6609596.png"
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

export default BoardType2Screen;
