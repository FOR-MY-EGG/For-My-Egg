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
const PregnantPolicyScreen = () => {
  const [pregPolicyData, setPregPolicyData] = useState([]);
  const [familyPolicyData, setFamilyPolicyData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  function link() {
    Linking.openURL();
  }

  useEffect(() => {
    http
      .get('policy/type/1')
      .then(response => {
        const pregDataArray = response.data.flat();
        setPregPolicyData(pregDataArray);
      })
      .catch(error => {
        console.error(error);
      });
    // http
    //   .get('policy/type/2')
    //   .then(response => {
    //     const familyDataArray = response.data.flat();
    //     setFamilyPolicyData(familyDataArray);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
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
          <Text style={styles.title}>정책 안내</Text>
          <View style={styles.detailsContainer}>
            <Text>{selectedItem.intro}</Text>
          </View>
          <Text style={styles.title}>대상</Text>
          <View style={styles.detailsContainer}>
            <Text>{selectedItem.targetIntro}</Text>
          </View>
          <Text style={styles.title}>지원 기관</Text>
          <View style={styles.detailsContainer}>
            <Text>{selectedItem.applyCenter}</Text>
          </View>
        </View>
      ) : (
        <View>
          <FlatList
            data={pregPolicyData}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.cardContainer}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => handleCardPress(item)}
                style={styles.card}>
                <View>
                  <Text style={styles.cardTypeText}>{item.name}</Text>
                  <Text style={styles.cardText}>{item.targetIntro}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
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
    marginBottom: 15,
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

export default PregnantPolicyScreen;
