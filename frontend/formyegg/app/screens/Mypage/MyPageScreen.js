import React from 'react';
import {Text, View} from 'react-native';

const MyPageScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>MyPageScreen! 🎉</Text>
      <Button title="정책" onPress={() => navigation.navigate('Chat')} />
      <Button title="금융" onPress={() => navigation.navigate('Chat')} />
    </View>
  );
};

export default MyPageScreen;
