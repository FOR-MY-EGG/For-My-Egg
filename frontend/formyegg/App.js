import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import store from './store';
import {Interceptor} from './app/utils/commonHttp';
import LoginStack from './app/screens/Navigation/LoginStack';
import {PaperProvider} from 'react-native-paper';
import messaging from '@react-native-firebase/messaging';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export let persistor = persistStore(store);

function App() {

  useEffect(()=>{
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      alert("알림", JSON.stringify(remoteMessage));
    })

    
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Interceptor>
              <LoginStack />
            </Interceptor>
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
