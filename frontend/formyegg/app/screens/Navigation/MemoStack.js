import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MemoScreen from '../Memo/MemoScreen';
import MemoWriteScreen from '../Memo/MemoWriteScreen';
import AccountListScreen from '../Memo/AccountListScreen';

const Stack = createNativeStackNavigator();

function MemoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MemoMain" component={MemoScreen} />
      <Stack.Screen name="Write" component={MemoWriteScreen} />
      <Stack.Screen name="AccountList" component={AccountListScreen} />
    </Stack.Navigator>
  );
}

export default MemoStack;
