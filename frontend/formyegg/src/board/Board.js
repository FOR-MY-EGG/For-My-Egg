import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardComponent from './components/Card';

export default function Board() {
  return (
    <View style={style.container}>
        <View>
            <CardComponent />
        </View>
    </View>
  )
};

const style = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white'
  }
});