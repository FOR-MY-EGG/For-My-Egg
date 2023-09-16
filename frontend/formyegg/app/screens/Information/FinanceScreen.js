import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import http from '../../utils/commonHttp';
import {Linking} from 'react-native';
import {Button} from 'react-native-paper';

const CardItem = ({title, content}) => (
  <View style={styles.cardItem}>
    <Text style={styles.cardItemTitle}>{title}</Text>
    <Text style={styles.cardItemContent}>{content}</Text>
  </View>
);
const FinanceScreen = () => {
  const [financeData, setFinanceData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [typeIntroductions, setTypeIntroductions] = useState([]);

  function link() {
    Linking.openURL(selectedItem.link);
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
        // alignItems: 'center',
        marginHorizontal: 40,
      }}>
      {selectedItem ? (
        <View>
          <Button
            textColor="#FFFFFF"
            buttonColor="#A0A0A0"
            icon="format-list-bulleted"
            mode="contained"
            onPress={handleBackPress}
            style={styles.backButton}>
            목록으로
          </Button>

          <View styles={styles.cardContainer}>
            <Text style={styles.header}>{selectedItem.name}</Text>
          </View>
          <Button
            textColor="#F6F6F6"
            buttonColor="#A3C9B8"
            icon="link-variant"
            mode="elevated"
            onPress={link}
            style={styles.linkButton}>
            상품 상세 이동
          </Button>
          <Text style={styles.title}>상품 안내</Text>
          <View style={styles.detailsContainer}>
            <Text style={{fontSize: 15}}>{selectedItem.intro}</Text>
          </View>
          <Text style={styles.title}>대상</Text>
          <View style={styles.detailsContainer}>
            <Text style={{fontSize: 15}}>{selectedItem.targetIntro}</Text>
          </View>
          <Text style={styles.title}>상품 분류</Text>
          <View style={styles.detailsContainer}>
            <Text style={{fontSize: 15}}>{getTypeName(selectedItem.type)}</Text>
          </View>
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
  introText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 0,
    paddingBottom: 0,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
  },

  cardContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: '100%',
    // marginHorizontal: 30,
    padding: 10,
  },
  cardText: {
    textAlign: 'center',
  },
  linkButton: {
    // marginTop: 20,
    backgroundColor: '#A2C6C3',
    borderRadius: 5,
  },
  detailsContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
  },
  backButton: {
    marginTop: 20,
    // padding: 10,
    // borderRadius: 5,
    alignItems: 'center',
    width: '40%',
  },
  title: {
    fontWeight: 'bold',
    color: '#626262',
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  cardTypeText: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#A3C9B8',
  },

  cardText: {
    textAlign: 'center',
    fontSize: 14,
  },
});

export default FinanceScreen;
