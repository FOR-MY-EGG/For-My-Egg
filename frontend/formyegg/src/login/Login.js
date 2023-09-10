import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import {Header, PricingCard} from 'react-native-elements';

const App = () => {
  return (
    <>
      <Header
        placement="left"
        barStyle="light-content"
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: '코로나 실시간 현황', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
        containerStyle={styles.headerContainer}
      />
      <ScrollView>
        <PricingCard
          color="#fa5252"
          title="전 세계"
          price="4,886,997"
          info={[
            '누적 확진자: 4,886,997',
            '신규 확진자: 87,131',
            '사망자: 320,794',
            '격리해제: 1,927,864',
          ]}
          button={{title: '더 보기', icon: 'search'}}
        />

        <PricingCard
          color="#4f9deb"
          title="대한민국"
          price="11,078"
          info={[
            '누적 확진자: 11,078',
            '신규 확진자: 13',
            '사망자: 263',
            '격리해제: 9,938',
          ]}
          button={{title: '더 보기', icon: 'search'}}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#343a40',
    justifyContent: 'space-around',
  },
});

export default App;