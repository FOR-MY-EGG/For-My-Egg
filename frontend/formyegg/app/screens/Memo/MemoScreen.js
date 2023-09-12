import React from 'react';
import {Text, View, Button} from 'react-native';

const MemoScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>MemoScreen! 🎉</Text>
      <Button title="입력" onPress={() => navigation.navigate('Write')} />
    </View>
  );
};

export default MemoScreen;
