import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import http from '../../utils/commonHttp';
import { Card } from 'galio-framework';
import { Linking } from "react-native";
const CardItem = ({ title, content }) => (
  <View style={styles.cardItem}>
    <Text style={styles.cardItemTitle}>{title}</Text>
    <Text style={styles.cardItemContent}>{content}</Text>
  </View>
);
const PolicyScreen = () => {
  const [pregPolicyData, setPregPolicyData] = useState([]);
  const [familyPolicyData, setFamilyPolicyData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  function link(){
    Linking.openURL()
  }
  
  useEffect(() => {
    http.get('policy/type/1')
      .then(response => {
        const pregDataArray = response.data
          .flat();
        setPregPolicyData(pregDataArray);
      })
      .catch(error => {
        console.error(error);
      });
    http.get('policy/type/2')
    .then(response => {
    const familyDataArray = response.data
        .map(response => response.data)
        .flat();
    setFamilyPolicyData(familyDataArray);
    })
    .catch(error => {
    console.error(error);
    });
  }, []);

  const handleCardPress = item => {
    setSelectedItem(item);
  };

  const handleBackPress = () => {
    setSelectedItem(null);
  };


  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      {selectedItem ? null:
      <Text style={styles.header}>출산,육아 정책</Text>}
      {selectedItem ? (
        <View>
          <View styles={styles.cardContainer}>
            <Text style={styles.header}>{selectedItem.name}</Text>
          </View>
          <Text>정책 안내</Text>
          <View style={styles.detailsContainer}>
              <Text >{selectedItem.intro}</Text>
          </View>
          <Text>대상</Text>
          <View style={styles.detailsContainer}>
            <Text>{selectedItem.targetIntro}</Text>
          </View>
          <Text >지원 기관</Text>
          <View style={styles.detailsContainer}>
            <Text>{selectedItem.applyCenter}</Text>
          </View>
           
            <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                          <Text>뒤로 가기</Text>
            </TouchableOpacity>
      
      </View>
      ) : (
        <FlatList
          data={pregPolicyData}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.cardContainer}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => handleCardPress(item)}
              style={styles.card}>
              <View>
                <Text style={styles.cardTypeText}>
                {item.name}
                </Text>
                <Text style={styles.cardText}>{item.targetIntro}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  introText:{
    fontSize:15,
    fontWeight: 'bold',
    marginBottom:0,
    paddingBottom:0
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    elevation: 2,
    width: 300,
    maxWidth: 400,
  },
  cardText: {
    textAlign: 'center',
  },
  cardTypeText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  linkButton: {
    marginTop: 5,
    backgroundColor: 'lightblue',
    padding: 15,
    borderRadius: 5,
  },
  
  detailsContainer: {
    width: 300,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    marginTop: 5,
    marginBottom:15,
    alignItems: 'baseline',
  },
  
  backButton: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '50%',
  },
  
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 2,
    width: 300,
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  
  cardTypeText: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#007BFF',
  },
  
  cardText: {
    textAlign: 'center',
    fontSize: 14,
  },
});

export default PolicyScreen;
