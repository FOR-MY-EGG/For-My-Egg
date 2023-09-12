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
const FinanceScreen = () => {
  const [financeData, setFinanceData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [typeIntroductions, setTypeIntroductions] = useState([]);

  function link(){
    Linking.openURL(selectedItem.link)
  }
  
  useEffect(() => {
    Promise.all(
      [...Array(6)].map((_, index) => http.get(`finance/type/${index + 1}`)),
    )
      .then(responses => {
        const financeDataArray = responses
          .map(response => response.data)
          .flat();
        setFinanceData(financeDataArray);

        // Extract type introductions
        const uniqueTypes = new Set(financeDataArray.map(item => item.type));
        setTypeIntroductions(Array.from(uniqueTypes));
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

  const getTypeName = type => {
    switch (type) {
      case 1:
        return '예금';
      case 2:
        return '적금';
      case 3:
        return '펀드';
      case 4:
        return '원자재(금, 은)';
      case 5:
        return '보험';
      case 6:
        return '주택청약';
      default:
        return '알 수 없음';
    }
  };

  const getTypeIntroduction = type => {
    switch (type) {
      case 1:
        return '예금은 ... 소개입니다.';
      case 2:
        return '적금은 ... 소개입니다.';
      case 3:
        return '펀드는 ... 소개입니다.';
      case 4:
        return '원자재(금, 은)은 ... 소개입니다.';
      case 5:
        return '보험은 ... 소개입니다.';
      case 6:
        return '주택청약은 ... 소개입니다.';
      default:
        return '알 수 없는 타입입니다.';
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      {selectedItem ? null:
      <Text style={styles.header}>금융정책 추천</Text>}
      {selectedItem ? (
        <View>
          <View styles={styles.cardContainer}>
            <Text style={styles.header}>{selectedItem.name}</Text>
          </View>
          <Text>상품 안내</Text>
          <View style={styles.detailsContainer}>
              <Text >{selectedItem.intro}</Text>
          </View>
          <Text>대상</Text>
          <View style={styles.detailsContainer}>
            <Text>{selectedItem.targetIntro}</Text>
          </View>
          <Text >상품 분류</Text>
          <View style={styles.detailsContainer}>
            <Text>{getTypeName(selectedItem.type)}</Text>
          </View>
          <Text >상품 상세로 이동</Text>
           <TouchableOpacity onPress={link} style={styles.linkButton} >
                          <Text>링크 이동 </Text>
          </TouchableOpacity>
            <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                          <Text>뒤로 가기</Text>
            </TouchableOpacity>
        {/* <View style={styles.card}>
          <Text style={styles.cardTypeText}>Link</Text>
          <Text>{selectedItem.link}</Text>
        </View> */}
      </View>
      ) : (
        <FlatList
          data={financeData}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.cardContainer}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => handleCardPress(item)}
              style={styles.card}>
              <View>
                <Text style={styles.cardTypeText}>
                  {getTypeName(item.type)}
                </Text>
                <Text style={styles.cardText}>{item.name}</Text>
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

export default FinanceScreen;
