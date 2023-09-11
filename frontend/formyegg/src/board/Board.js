import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CardComponent from './components/Card';
import http from '../common/commonHttp';

export default function Board() {
  const [cards, setCards] = useState([]);
  
  return (
    // <FlatList data={data} keyExtractor={(_) => _.title} style={styles.container} 
    //         renderItem={({ item }) => {
    //         	const { title, content } = item;
    //             return (
    //             	<FeedSection title={title} content={content}/>
    //             )
    //         }}
    //     />
    <View></View>
  )
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white'
  }
});