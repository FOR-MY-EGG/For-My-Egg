import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyPageScreen from '../Mypage/MyPageScreen';
import HomeScreen from '../Home/HomeScreen';
import ChildScreen from '../Mypage/ChildScreen';
import ChildRegistrationScreen from '../Mypage/ChildRegistrationScreen';
import AlertScreen from '../Home/AlertScreen';
import FamilyScreen from '../Mypage/FamilyScreen';
import AccountInfo from '../Home/AccountInfo';
import AccountScreen from '../Mypage/AccountScreen';
import FinanceScreen from '../Information/FinanceScreen';
import PolicyTopTab from './PolicyTopTab';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="ChildRegist" component={ChildRegistrationScreen} />
      <Stack.Screen
        name="ChildRegist"
        component={ChildRegistrationScreen}
        options={{title: '아이 등록'}}
      />
      <Stack.Screen
        name="Child"
        component={ChildScreen}
        options={{title: '아이 정보'}}
      />
      <Stack.Screen
        name="Mypage"
        component={MyPageScreen}
        options={{title: '마이페이지'}}
      />
      <Stack.Screen
        name="AccountInfo"
        component={AccountInfo}
        options={{title: '기록 상세 내역 조회'}}
      />
      <Stack.Screen
        name="product"
        component={FinanceScreen}
        options={{title: '금융 상품 정보'}}
      />
      <Stack.Screen
        name="policy"
        component={PolicyTopTab}
        options={{title: '육아 정책 정보'}}
      />
      <Stack.Screen name="Alert" component={AlertScreen} />
      <Stack.Screen
        name="Family"
        component={FamilyScreen}
        options={{title: '초대 코드'}}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
