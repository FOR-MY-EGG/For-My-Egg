import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import { Container, Content, Icon } from 'native-base';
import CardComponent from './components/Card';

import {Header, PricingCard} from 'react-native-elements';

export default function Board() {
  return (
    <Container style={styles.container}>
        <Content>
            <CardComponent />
        </Content>
    </Container>
  )
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#343a40',
    justifyContent: 'space-around',
  },
});