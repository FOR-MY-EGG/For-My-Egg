import { StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import React, { useState } from 'react';

export default function CardComponent({nickname, image, title, createdDate, content, profile}) {
    const [show, setShow] = useState(false);

    const handleLine = () => {
        setShow(prev => !prev);
    }
    return (
        <Card style={{backgroundColor: "#FAFAFA", borderStyle: 'solid', borderWidth: 0.5, marginBottom: 5}}>
            <Card.Content style={{flexDirection: "row", minHeight: 80}}>
            <Avatar.Image size={50} source={{ uri: profile }} />
            <Text style={{marginLeft: 10, marginTop: 10}} variant="titleLarge">{nickname}</Text>
            <Text style={{marginLeft: 150, marginTop: 40, marginBottom: 10}} variant="bodyMedium">{createdDate}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: image }} />
            <Text style={{marginLeft: 10, marginTop: 10}} variant="titleLarge">{title}</Text>
            <TouchableOpacity onPress={() => handleLine()} style={{marginTop: 10, marginLeft: 10}}>
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
            <Card.Actions>
            {/* <Button>Ok</Button> */}
            </Card.Actions>
        </Card>
        // <Card>
        // <CardItem>
        //     <Left>
        //     <Thumbnail source={{ uri: profile }} />
        //     <Body>
        //         <Text style={{fontSize: 20, fontWeight: "bold"}}>{nickname}</Text>
        //         <Text note>{createdDate}</Text>
        //     </Body>
        //     </Left>
        // </CardItem>
        // <CardItem cardBody>
        //     <Image 
        //     source={{ uri: image }} 
        //     style={{ height:200, width:null, flex: 1 }} />
        // </CardItem>
        // <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 20, marginBottom: 10}}>{title}</Text>
        // <CardItem>
        //     <Text style={{marginBottom: 10}}>
        //     <TouchableOpacity onPress={() => handleLine()}>
        //         {!show ? 
        //                 <Text style={{
        //                     maxWidth: 300
        //                 }}> 
        //                     {content.slice(0, 40) + (content.length > 40 ? "..." : "")}
        //                 </Text>
        //             :
        //                 <Text style={{ 
        //                     maxWidth: 300
        //                 }}> 
        //                     {content}
        //                 </Text>
        //         }
        //     </TouchableOpacity>
        //     </Text>
        //     </CardItem>
        // </Card>
    );
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});