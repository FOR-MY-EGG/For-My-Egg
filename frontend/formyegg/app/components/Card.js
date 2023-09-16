import {StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar, Button, Card, Text, View} from 'react-native-paper';
import React, {useState} from 'react';

export default function CardComponent({
  nickname,
  image,
  title,
  createdDate,
  content,
  profile,
}) {
  const [show, setShow] = useState(false);

  const handleLine = () => {
    setShow(prev => !prev);
  };
  return (
    <Card
      style={{
        backgroundColor: '#FFFCFC',
        // backgroundColor: 'green',
        elevation: 2,
        marginBottom: 5,
      }}>
      <Card.Content
        style={{
          flexDirection: 'row',
          flex: 1,
          //   minHeight: 80,
          justifyContent: 'center',
          //   alignContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Avatar.Image size={32} source={{uri: profile}} />
        <Text variant="bodyLarge" style={{marginLeft: 10, color: '#343434'}}>
          {nickname}
        </Text>
        <Text
          //   style={{marginLeft: 150, marginTop: 40, marginBottom: 10}}
          style={{textAlign: 'right', flex: 1, color: '#A0A0A0'}}
          variant="bodySmall">
          {createdDate}
        </Text>
      </Card.Content>
      {image ? <Card.Cover
        source={{
          uri:
            image ||
            'https://formyegg-bucket.s3.ap-northeast-2.amazonaws.com/noImage.png',
        }}
        style={{borderRadius: 0, flex: 1}}
      />
      : <Text />}
      
      <Text
        style={{padding: 10, fontWeight: 800, color: '#343434'}}
        variant="titleMedium">
        {title}
      </Text>
      <TouchableOpacity
        onPress={() => handleLine()}
        style={{paddingHorizontal: 10}}>
        {!show ? (
          <Text
            style={{
              //   maxWidth: 300,
              //   color: '#A9A9A9',
              color: '#A0A0A0',
            }}>
            {content.slice(0, 34) + (content.length > 34 ? ' ...더보기' : '')}
          </Text>
        ) : (
          <Text
            style={{
              //   maxWidth: 300,
              color: '#343434',
            }}>
            {content}
          </Text>
        )}
      </TouchableOpacity>
      <Card.Actions>{/* <Button>Ok</Button> */}</Card.Actions>
    </Card>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
