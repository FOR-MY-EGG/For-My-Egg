import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import http from '../../../src/common/commonHttp';

const InformationScreen = () => {
  const [financeData, setFinanceData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [typeIntroductions, setTypeIntroductions] = useState([]);

  useEffect(() => {
    Promise.all([...Array(6)].map((_, index) => http.get(`finance/type/${index + 1}`)))
      .then(responses => {
        const financeDataArray = responses.map(response => response.data).flat();
        setFinanceData(financeDataArray);

        // Extract type introductions
        const uniqueTypes = new Set(financeDataArray.map(item => item.type));
        setTypeIntroductions(Array.from(uniqueTypes));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleCardPress = (item) => {
    setSelectedItem(item);
  }

  const handleBackPress = () => {
    setSelectedItem(null);
  }

  const getTypeName = (type) => {
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
  }

  const getTypeIntroduction = (type) => {
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
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <Text style={styles.header}>Finance Information🎉</Text>
      {selectedItem ? (
        <View style={styles.detailsContainer}>
          <Text>Name: {selectedItem.name}</Text>
          <Text>Intro: {selectedItem.intro}</Text>
          <Text>Target Intro: {selectedItem.targetIntro}</Text>
          <Text>Type: {getTypeName(selectedItem.type)}</Text>
          <Text>Link: {selectedItem.link}</Text>
          <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
            <Text>뒤로 가기</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={financeData}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.cardContainer}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCardPress(item)} style={styles.card}>
              <View>
                <Text style={styles.cardTypeText}>{getTypeName(item.type)}</Text>
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
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  detailsContainer: {
    width: '80%',
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
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
  backButton: {
    marginTop: 20,
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  typeIntroductionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },
  typeIntroductionItem: {
    backgroundColor: 'lightgray',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: '80%',
    maxWidth: 400,
  },
});

export default InformationScreen;
