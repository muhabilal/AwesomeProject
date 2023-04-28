import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Messages = ({ navigation }) => {
    const users = [
        {
            id: '1',
            userName: 'Jenny Doe',
            // userImg: require('../assets/users/user-3.jpg'),
            userImg: require('../../assets/users/user-3.jpg'),
            messageTime: '4 mins ago',
            messageText:
                'Hey there, this is my test for a post of my social app in React Native.',
        },
        {
            id: '2',
            userName: 'John Doe',
            // userImg: require('../assets/users/user-1.jpg'),
            userImg: require('../../assets/users/user-1.jpg'),
            messageTime: '2 hours ago',
            messageText:
                'Hey there, this is my test for a post of my social app in React Native.',
        },
        {
            id: '3',
            userName: 'Ken William',
            // userImg: require('../assets/users/user-4.jpg'),
            userImg: require('../../assets/users/user-4.jpg'),
            messageTime: '1 hours ago',
            messageText:
                'Hey there, this is my test for a post of my social app in React Native.',
        },
        {
            id: '4',
            userName: 'Selina Paul',
            // userImg: require('../assets/users/user-6.jpg'),
            userImg: require('../../assets/users/user-6.jpg'),
            messageTime: '1 day ago',
            messageText:
                'Hey there, this is my test for a post of my social app in React Native.',
        },
        {
            id: '5',
            userName: 'Christy Alex',
            // userImg: require('../assets/users/user-7.jpg'),
            userImg: require('../../assets/users/user-7.jpg'),
            messageTime: '2 days ago',
            messageText:
                'Hey there, this is my test for a post of my social app in React Native.',
        },
        {
            id: '6',
            userName: 'Jenny Doe',
            // userImg: require('../assets/users/user-3.jpg'),
            userImg: require('../../assets/users/user-3.jpg'),
            messageTime: '4 mins ago',
            messageText:
                'Hey there, this is my test for a post of my social app in React Native.',
        },
        {
            id: '7',
            userName: 'Jenny Doe',
            // userImg: require('../assets/users/user-3.jpg'),
            userImg: require('../../assets/users/user-3.jpg'),
            messageTime: '4 mins ago',
            messageText:
                'Hey there, this is my test for a post of my social app in React Native.',
        },
        {
            id: '8',
            userName: 'Jenny Doe',
            // userImg: require('../assets/users/user-3.jpg'),
            userImg: require('../../assets/users/user-3.jpg'),
            messageTime: '4 mins ago',
            messageText:
                'Hey there, this is my test for a post of my social app in React Native.',
        },
    ];
    const RenderCard = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Chat', { userName: item.userName })}>
                <View style={styles.card}>
                    <Image source={item.userImg} style={styles.img} />
                    <View>
                        <Text style={styles.text}>{item.userName}</Text>
                        <Text style={styles.text}>{item.messageText}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <FlatList
                data={users}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <RenderCard item={item} />}
            />
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    img: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'green'
    },
    text: {
        fontSize: 18,
        marginLeft: 10,
    },
    card: {
        flexDirection: 'row',
        margin: 3,
        padding: 4,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    }
})