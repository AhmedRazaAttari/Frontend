import React, { useState, useCallback, useEffect } from 'react'
import { View, TouchableOpacity, StatusBar, Text } from 'react-native'
import { Entypo, AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { GiftedChat, Bubble } from 'react-native-gifted-chat'

function Chat({navigation}) {
    const [messages, setMessages] = useState([]);

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

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="#d9a877" />
            {/* Header */}
            <View style={{ paddingLeft: 20, paddingRight: 20, width: "100%", height: 70, backgroundColor: "#d9a877", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20 }}>Johny Appanah</Text>
                <TouchableOpacity>
                </TouchableOpacity>
            </View>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
                renderBubble={props => {
                    return (
                        <Bubble
                            {...props}
                            wrapperStyle={{
                                left: {
                                    backgroundColor: '#d1ebd8',
                                },
                                right: {
                                    backgroundColor: "#d9a877",
                                },
                            }}
                        />
                    );
                }}
            />
        </View>
    )
}

export default Chat;