import { Text, TouchableOpacity, View } from "react-native";
import NavigationService from "../common/NavigationService";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
    const name = useSelector((state) => state.member.name);

    return (
    <View>
        <TouchableOpacity onPress={()=> NavigationService.navigate('HomeScreen', {
            screen: 'HomeScreen',
            info: 'information'})}
            style={{
                justifyContent: 'flex-end',
                backgroundColor: 'rgb(87,174,198)',
                padding: 20,
                marginTop: 20,
                borderRadius: 30
            }}>
            <Text>
            Hi~ Login~ {name}
            </Text>
        </TouchableOpacity>
    </View>
  );
}