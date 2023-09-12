import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MemoScreen from '../Memo/MemoScreen';
import MemoWriteScreen from '../Memo/MemoWriteScreen';

const Stack = createNativeStackNavigator();

function MemoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MemoMain" component={MemoScreen} />
      <Stack.Screen name="Write" component={MemoWriteScreen} />
    </Stack.Navigator>
  );
}

export default MemoStack;
