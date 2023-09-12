import React from 'react';
import {Text, View, Button} from 'react-native';

const BoardType2Screen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>출산! 🎉</Text>
      <Button title="글작성" onPress={() => navigation.navigate('Write')} />
      <Button title="채팅" onPress={() => navigation.navigate('Chat')} />
    </View>
  );
};

export default BoardType2Screen;
