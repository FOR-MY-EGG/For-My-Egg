import React from 'react';
import {Text, View, Button} from 'react-native';

const AccountScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>AccountScreen.🎉</Text>
      <Button title="채팅" onPress={() => navigation.navigate('Chat')} />
    </View>
  );
};

export default AccountScreen;
