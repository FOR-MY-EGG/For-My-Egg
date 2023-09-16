import * as React from 'react';
import BoardWriteScreen from '../Board/BoardWriteScreen';
import ChatScreen from '../Board/ChatScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BoardTopTab from './BoardTopTab';

const Stack = createNativeStackNavigator();

function BoardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BoardMain"
        component={BoardTopTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{title: '채팅'}}
      />
      <Stack.Screen
        name="Write"
        component={BoardWriteScreen}
        options={{title: '글 등록'}}
      />
    </Stack.Navigator>
  );
}

export default BoardStack;
