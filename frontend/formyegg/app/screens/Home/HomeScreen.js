import React from 'react';
import {Text, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home Screen! 🎉</Text>
      <Button title="정보" onPress={() => navigation.navigate('Information')} />
    </View>
  );
};

export default HomeScreen;
