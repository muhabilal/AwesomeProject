import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const route = useRoute();
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])
    const onSend = messageArray => {
        console.log(messageArray);
        setMessages(previousMessages => GiftedChat.append(previousMessages, messageArray))

    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
                renderBubble={props => {
                    return (
                        <Bubble {...props} wrapperStyle={{
                            right: {
                                backgroundColor: '#009387',
                            }
                        }} />
                    )
                }}
                alwaysShowSend
                scrollToBottom
            />
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({})