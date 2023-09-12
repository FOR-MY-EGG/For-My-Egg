import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyPageScreen from '../Mypage/MyPageScreen';
import {Button, View, TouchableOpacity, Text} from 'native-base';
import HomeScreen from '../Home/HomeScreen';
import InformationScreen from '../Information/InformationScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#000"
            />
          ),
        }}
      />
      <Stack.Screen name="Mypage" component={MyPageScreen} />
      <Stack.Screen name="Information" component={InformationScreen} />
      {/* <Stack.Screen name="Write" component={BoardWriteScreen} /> */}
    </Stack.Navigator>
  );
}

export default HomeStack;
