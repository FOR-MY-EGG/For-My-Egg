import * as React from 'react';
import BoardWriteScreen from '../Board/BoardWriteScreen';
import ChatScreen from '../Board/ChatScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BoardTopTab from './BoardTopTab';

const Stack = createNativeStackNavigator();

function BoardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BoardMain" component={BoardTopTab} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Write" component={BoardWriteScreen} />
    </Stack.Navigator>
  );
}

export default BoardStack;
