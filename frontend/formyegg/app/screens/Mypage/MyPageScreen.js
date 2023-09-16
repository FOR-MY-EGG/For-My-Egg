import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useDispatch } from 'react-redux';
import { setMember } from '../../../reducers/memberReducer';

const MyPageScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const options = [
    { id: 1, label: '아이 정보 관리', onPress: () => navigation.navigate('Child') },
    { id: 2, label: '가족 계정 연동', onPress: () => navigation.navigate('Family') },
    { id: 3, label: '계좌 연동', onPress: () => navigation.navigate('Account') },
    { id: 4, label: '로그아웃', onPress: () => dispatch(setMember({
                    token: "",
                    groupId: 0,
                    memberId: 0,
                    isMember: 0,
                    nickname: "",
    })) },
  ];

  const renderOption = ({ item }) => (
    <TouchableOpacity onPress={item.onPress} style={styles.option}>
      <Text style={styles.optionText}>{item.label}</Text>
      {item.id != 3?
        <View style={styles.iconContainer}>
          <Icon name="chevron-right" size={16} color="#000" />
        </View>: null
      }
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderOption}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const Item = ({ item }) => (
  <TouchableOpacity onPress={() => navigation.navigate('ChildDetails', { childId: item.id })} style={styles.childItem}>
    <View style={{marginLeft: 10}}>
      <Egg name="egg" size={20} color="#343434"></Egg>
    </View>
    <Text style={styles.childName}>{item}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    // backgroundColor: '#FDF8E1'
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 7
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
  iconContainer: {
    marginLeft: 'auto',
  },
});

export default MyPageScreen;
