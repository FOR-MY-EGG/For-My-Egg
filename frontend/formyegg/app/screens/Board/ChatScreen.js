import React, { useEffect } from 'react';
import {FlatList, Text, View, StyleSheet, Image} from 'react-native';
import { useState } from 'react';
import http from "../../utils/commonHttp"
import { useSelector } from 'react-redux';
const ChatScreen = ({navigation, route}) => {
  const [message, setMessage] = useState([]);
  const memberId = useSelector((state) => state.member.memberId);

  useEffect(() => {
    http.get(`chat/${route.params.affiliation}`)
    .then((res) => {
      setMessage(res.data);
    })
    .catch((err) => {
      alert(err)
    })
  }, [])

  const renderItem = ({item}) => (
    item.writer === memberId ? <MyMessage nickname={item.nickname} createdDate={item.createdDate} content={item.content}/> 
    : <OtherMessage nickname={item.nickname} createdDate={item.createdDate} content={item.content}/>
  );

  return (
    <FlatList style={styles.scroll} data={message} renderItem={renderItem} keyExtractor={item => item.chatId}>

    </FlatList>
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}>
    //   <Text>ChatScreen! 🎉</Text>
    // </View>
  );
};

const MyMessage = ({ nickname, createdDate, content }) => (
  <View style={styles.myMessage}>
    <View>
        <Text style={[styles.myText, styles.nickname]}>{nickname}</Text>
        <Text style={[styles.myText, styles.content]}>{content}</Text>
        <Text style={[styles.myText, styles.date]}>{createdDate}</Text>
    </View>
    <Image style={styles.profile} source={{ uri: "https://formyegg-bucket.s3.ap-northeast-2.amazonaws.com/user.png" }} />
  </View>
);

const OtherMessage = ({ nickname, createdDate, content }) => (
  <View style={styles.otherMessage}>
    <Image style={styles.profile} source={{ uri: "https://formyegg-bucket.s3.ap-northeast-2.amazonaws.com/user.png" }} />
    <View>
        <Text style={[styles.otherText, styles.nickname]}>{nickname}</Text>
        <Text style={[styles.otherText, styles.content]}>{content}</Text>
        <Text style={[styles.otherText, styles.date]}>{createdDate}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: 'white',
    width: 440,
  }, 
  myMessage: {
    marginLeft: 120,
    maxWidth: 300,
    width: 'auto',
    justifyContent: "flex-end",
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    color: "black",
    fontSize: 30,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 30,
    borderBottomRightRadius: 0,
    paddingTop: 10,
    paddingRight: 20
  }, 
  otherMessage: {
    maxWidth: 300,
    justifyContent: "flex-start",
    flexDirection: "row",
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    color: "black",
    fontSize: 30,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 30,
    borderBottomLeftRadius: 0,
    paddingTop: 10,
    paddingLeft: 20
  },
  profile: {
    flex: 1,
    height: 50,
    maxWidth: 50,
    resizeMode: "cover",
  },
  otherText: {
    marginLeft: 10,
    textAlign: 'left',
    justifyContent: "flex-start"
  },
  myText: {
    marginRight: 20,
    textAlign: 'right',
    justifyContent: "flex-end"
  },
  nickname: {
    paddingTop: 5,
    color: "black",
    fontWeight: "bold",
    fontSize: 16
  },
  content: {
    color: "black",
    fontSize: 14
  },
  date: {
    color: "gray",
    fontSize: 12,
    paddingBottom: 5,
  }
});

export default ChatScreen;
