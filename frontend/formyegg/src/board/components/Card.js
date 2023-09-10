import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import React, { useState } from 'react';

export default function CardComponent() {
    const [line, setLine] = useState(2);
    const [isActivated, setIsActivated] = useState(false);

    const handleLine = () => {
        isActivated ? setLine(2) : setLine(Number.MAX_SAFE_INTEGER);
        setIsActivated(prev => !prev);
        alert("asd");
    }

      
    return (
        <Card>
        <CardItem>
            <Left>
            <Thumbnail source={{ uri: 'https://steemitimages.com/u/anpigon/avatar' }} />
            <Body>
                <Text>asdasd</Text>
                <Text note>Jan 21, 2019</Text>
            </Body>
            </Left>
        </CardItem>
        <CardItem cardBody>
            <Image 
            source={{ uri: 'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png' }} 
            style={{ height:200, width:null, flex: 1 }} />
        </CardItem>
        <CardItem>
            <Text>
            <Text style={{ fontWeight:'900'}}>Anpigon</Text>
            <Text numberOfLines={line} ellipsizeMode="tail" onPress={()=>handleLine()}>
                {line} 이번에는 리액트 네이티브(React Native)로 인스타그램 UI을 구현하는 포스팅입니다. 다른 앱을 따라 만들어 보는 것은 굉장히 재미있습니다. 구글에서 인스타그램 클론 코딩 강의를 찾아보니, 다른 개발자들이 올린 동영상 강의를 몇 개 찾을 수 있었습니다.
            </Text>
            </Text>
            </CardItem>
        </Card>
    );
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    hr: {
        display: 'block'
    }
});