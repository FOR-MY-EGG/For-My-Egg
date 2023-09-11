import React from 'react';
import {Text, View, Button} from 'react-native';

const InitScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>처음 가입 하셨나유?! 🎉</Text>
      <Button title="처음" onPress={() => dispatch(setMember(response.data))} />
      <Text>그룹이냐 🎉</Text>
      <Button title="그룹" onPress={() => navigation.navigate('Join')} />
    </View>
  );
};

export default InitScreen;
