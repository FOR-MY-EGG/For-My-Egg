import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MemoScreen from '../Memo/MemoScreen';
import MemoWriteScreen from '../Memo/MemoWriteScreen';
import AccountListScreen from '../Memo/AccountListScreen';

const Stack = createNativeStackNavigator();

function MemoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MemoMain"
        component={MemoScreen}
        options={{title: '기록 캘린더', headerShown: false}}
      />
      <Stack.Screen
        name="Write"
        component={MemoWriteScreen}
        options={{title: '메모 작성'}}
      />
      <Stack.Screen
        name="AccountList"
        component={AccountListScreen}
        options={{title: '계좌 선택'}}
      />
    </Stack.Navigator>
  );
}

export default MemoStack;
