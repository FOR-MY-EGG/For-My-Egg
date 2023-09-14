import React, { useEffect, useCallback, useMemo } from 'react';
import {FlatList, Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import http from "../../utils/commonHttp"
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import SockJs from "sockjs-client";
import Stomp from "webstomp-client";

const ChatScreen = ({navigation, route}) => {
  const [message, setMessage] = useState([]);
  const memberId = useSelector((state) => state.member.memberId);
  const [text, setText] = useState("");

  let socket = useMemo(() => new SockJs("http://10.0.2.2:8080/ws/chat"), []);
  let stompClient = useMemo(() => Stomp.over(socket), []);

  useFocusEffect( 
    useCallback(() => {
      stompClient.connect({}, onConnected, onError);
      http.get(`chat/${route.params.affiliation}`)
      .then((res) => {
        setMessage(res.data);
      })
      .catch((err) => {
        alert(err)
      })
      return () => {
        if(stompClient != null ) {
          stompClient.unsubscribe("curRoom");
          stompClient.disconnect();
          setMessage([]);
          setText("");
        }
      }
    }, [])
  );

  const onConnected = () => {
    stompClient.subscribe(`/topic/room.${route.params.affiliation}`, onMessageReceived, {
      id: "curRoom",
      "auto-delete": true,
      durable: false,
      exclusive: false,
    })
  };

  const onError = () => {
    alert("err")
  };

  const onMessageReceived = (payload) => {
    setMessage((prev) => {
      return [...prev, JSON.parse(payload.body)];
    });
  };

  // useEffect(() => {
  //   if(socket != null && stompClient != null) {
  //     stompClient.subscribe(`/topic/room.${route.params.affiliation}`, onMessageReceived, {
  //       id: "curRoom",
  //       "auto-delete": true,
  //       durable: false,
  //       exclusive: false,
  //     })
  //   }
  // }, [stompClient])

  const send = () => {
    if(stompClient != null) {
      const message = {
        writer: memberId,
        type: 0,
        affiliation: route.params.affiliation,
        content: text,
      };
      stompClient.send("/pub/chat.message", JSON.stringify(message));
      setText("");
    }
  }

  const onText = (text) => {
      setText(text);
  }

  const renderItem = ({item}) => (
    item.writer === memberId ? <MyMessage nickname={item.nickname} createdDate={item.createdDate} content={item.content}/> 
    : <OtherMessage nickname={item.nickname} createdDate={item.createdDate} content={item.content}/>
  );

  return (
    <View style={{
      flex: 1,
    }}>
      <FlatList style={styles.scroll} data={message} renderItem={renderItem} keyExtractor={item => item.chatId} />
      <ChatInput onText={onText} text={text} onSend={send}/>
    </View>
  );
};

const MyMessage = ({ nickname, createdDate, content }) => (
  <View style={styles.myMessage}>
    <View>
        <Text style={[styles.myText, styles.nickname]}>{nickname}</Text>
        <Text style={[styles.myText, styles.content]}>{content}</Text>
        <Text style={[styles.myText, styles.date]}>{new String(createdDate).slice(11)}</Text>
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
        <Text style={[styles.otherText, styles.date]}>{new String(createdDate).slice(11)}</Text>
    </View>
  </View>
);

const ChatInput = ({onText, text, onSend}) => (
  <View style={{backgroundColor: "red", height: 60, justifyContent: "flex-start", flexDirection: "row", backgroundColor: "lightgray"}}>
    <TextInput
        style={styles.chatInput}
        placeholder="채팅을 입력해주세요."
        onChangeText={onText}
        value={text}
        />
      <TouchableOpacity onPress={onSend}>
          <Image style={styles.button} source={{ uri: "https://formyegg-bucket.s3.ap-northeast-2.amazonaws.com/send.png" }}></Image>
      </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#FDF8E1',
    width: 440,
    borderWidth: 1
  }, 
  myMessage: {
    marginLeft: 170,
    maxWidth: 250,
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
    maxWidth: 250,
    justifyContent: "flex-start",
    flexDirection: "row",
    backgroundColor: 'lightgray',
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
    marginTop: 5
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
    minWidth: 100
  },
  chatInput: {
    width: 370,
    marginBottom: 100,
    backgroundColor: "lightgray",
    height: 60,
    borderColor: 'gray',
    padding: 8,
  },
  button: {
    marginLeft: 15,
    marginTop: 10,
    backgroundColor: "lightgray",
    width: 40,
    height: 40, 
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default ChatScreen;
