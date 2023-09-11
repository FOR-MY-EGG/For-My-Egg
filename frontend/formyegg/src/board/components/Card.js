import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import React, { useState, useRef } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CardComponent({nickname, image, title, createAt, content, view}) {
    const [show, setShow] = useState(false);

    const handleLine = () => {
        setShow(prev => !prev);
    }


    return (
        <Card>
        <CardItem>
            <Left>
            <Thumbnail source={{ uri: 'https://steemitimages.com/u/anpigon/avatar' }} />
            <Body>
                <Text>{nickname}</Text>
                <Text note>Janasd 21, 2019</Text>
            </Body>
            </Left>
        </CardItem>
        <CardItem cardBody>
            <Image 
            source={{ uri: image }} 
            style={{ height:200, width:null, flex: 1 }} />
        </CardItem>
        <Text style={{ fontWeight:'900', marginLeft: 20, marginTop: 20}}>{title}</Text>
        <CardItem>
            <Text style={{marginBottom: 20}}>
            <TouchableOpacity onPress={() => handleLine()}>
                {!show ? 
                        <Text style={{
                            maxWidth: 300
                        }}> 
                            {content.slice(0, 40) + (content.length > 40 ? "..." : "")}
                        </Text>
                    :
                        <Text style={{ 
                            maxWidth: 300
                        }}> 
                            {content}
                        </Text>
                }
            </TouchableOpacity>
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
});