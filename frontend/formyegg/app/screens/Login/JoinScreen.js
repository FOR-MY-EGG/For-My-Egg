import React from 'react';
import {Text, View, Button} from 'react-native';

const JoinScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>그룹 코드 내놔.🎉</Text>
      <Button title="입력" onPress={() => dispatch(setMember(response.data))} />
    </View>
  );
};

export default JoinScreen;
