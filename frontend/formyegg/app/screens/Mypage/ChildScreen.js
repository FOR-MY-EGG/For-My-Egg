import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import http from '../../utils/commonHttp';

const ChildScreen = ({ navigation }) => {
  
  const [childList, setChildList] = useState([]);
  const userInfo = useSelector((state) => state.member);
  
  // API에서 아이 목록을 불러오는 함수 (예시)
  const fetchChildList = (memberId) => {
    http.get(`member/all/${memberId}`)
      .then(response => {
        if (response.data !== undefined && response.data.children !== undefined) {
          const childNames = response.data.children.map(child => child.name);
          console.log(childNames)
          setChildList(childNames);

        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    // 화면이 처음 렌더링될 때 아이 목록을 불러옴
    console.log(userInfo.memberId)
    const memberId = userInfo.memberId
    fetchChildList(memberId);
  }, []);
  useEffect(() => {
    console.log(childList); // 여기서 childList를 확인
  }, [childList]); 
  const renderChildItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ChildDetails', { childId: item.id })} style={styles.childItem}>
      <View style={styles.childIcon}>
        <Icon name="child" size={30} color="#000" />
      </View>
      <Text style={styles.childName}>{item}</Text>
    </TouchableOpacity>
  );

  
  return (
    <View style={styles.container}>
      <FlatList
        data={childList}
        keyExtractor={(item, index) => index.toString()} 
        renderItem={renderChildItem}
      />
      <View style={styles.registerButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ChildRegist')}>
          <View style={styles.registerButton}>
            <Icon name="plus" size={30} color="#000" />
            <Text style={styles.registerText}>아이 등록하기</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    padding: 24,
    backgroundColor: '#FDF8E1'
  },
  
  childItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  childName: {
    marginLeft: 10,
    fontSize: 20,
  },
  registerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  registerText: {
    marginLeft: 10,
    fontSize: 20,
  },

  registerButtonContainer: {
    marginBottom: 20, // 마진 추가
  },
});

export default ChildScreen;
