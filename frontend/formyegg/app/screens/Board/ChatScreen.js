import React from 'react';
import {Text, View} from 'react-native';

const ChatScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>ChatScreen! 🎉</Text>
    </View>
  );
};

export default ChatScreen;
