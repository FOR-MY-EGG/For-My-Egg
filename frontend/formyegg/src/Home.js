import { Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import NavigationService from "./common/NavigationService";
import { useDispatch } from 'react-redux';
import { setName } from "../reducers/memberReducer";

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        alert('이름 ㅎㅇ');
        dispatch(setName("김희곤"))
    }, [])

    return (
    <TouchableOpacity onPress={()=> NavigationService.navigate('LoginScreen', {
        screen: 'LoginScreen',
        info: 'information'})}
        style={{
            justifyContent: 'flex-end',
            backgroundColor: 'rgb(100,100,100)',
            padding: 20,
            marginTop: 20,
            borderRadius: 30
        }}>
        <Text>
        Hi~ Home~
        </Text>
    </TouchableOpacity>
  );
}