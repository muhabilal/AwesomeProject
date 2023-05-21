import { Button, StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import Btn from './components/Btn';
const ByAdd = () => {
    const [roomData, setRoomData] = useState([]);
    const [image, setImage] = useState(null);
    const [rooms, setRooms] = useState('');
    const [size, setSize] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [kitchen, setKitchen] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const addRoom = () => {
        const newRoomData = [...roomData, { id: Math.random().toString(), rooms, size, bathrooms, kitchen, address, price, image }];
        setRoomData(newRoomData);
        setRooms('');
        setSize('');
        setBathrooms('');
        setKitchen('');
        setAddress('');
        setPrice('');
        setImage(null);
    };
    const [searchQuery, setSearchQuery] = React.useState('');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Suite Setup</Text>
                <TextInput
                    placeholder='Search'
                    style={styles.Searchinput}
                    autonPressoCapitalize='none'
                    onChangeText={text => setSearchQuery(text)}
                    value={searchQuery}
                />
                <MaterialIcons
                    name='notifications'
                    size={30}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={pickImage} style={{ flexDirection: 'row' }}>
                    <Text>Pick an image from camera roll</Text>
                    <MaterialIcons
                        name='photo-camera'
                        size={20}
                    />
                </TouchableOpacity>
                {image && <Image source={{ uri: image }} style={styles.imgSize} />}
                <View>
                    <Text>Rooms:</Text>
                    <TextInput placeholder='Enter Rooms' value={rooms} onChangeText={setRooms} style={styles.textInput} />
                </View>
                <View>
                    <Text>Size:</Text>
                    <TextInput placeholder='Enter Size' value={size} onChangeText={setSize} style={styles.textInput} />
                </View>
                <View>
                    <Text>Bathrooms:</Text>
                    <TextInput placeholder='Enter Bathrooms' value={bathrooms} onChangeText={setBathrooms} style={styles.textInput} />
                </View>
                <View>
                    <Text>Kitchen:</Text>
                    <TextInput placeholder='Enter Kitchen' value={kitchen} onChangeText={setKitchen} style={styles.textInput} />
                </View>
                <View>
                    <Text>Address:</Text>
                    <TextInput placeholder='Enter Address' value={address} onChangeText={setAddress} style={styles.textInput} />
                </View>
                <View>
                    <Text>Price:</Text>
                    <TextInput placeholder='Enter Price' value={price} onChangeText={setPrice} style={styles.textInput} />
                </View>
                <Btn btnName={'Submit'} press={addRoom} />
                <FlatList
                    data={roomData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View>
                            <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
                            <View>
                                <Text>{item.rooms}</Text>
                                <Text>{item.roomSize} - {item.bathrooms} - {item.kitchen}</Text>
                                <Text>{item.address}-{item.price}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View >
    )
}

export default ByAdd

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387',
    },
    header: {
        flex: 0.15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    Searchinput: {
        backgroundColor: '#fff',
        height: 40,
        width: 200,
        borderRadius: 5,
        paddingHorizontal: 5,
    },
    headerText: {
        fontWeight: '400',
        fontSize: 20,
        color: '#fff'
    },
    body: {
        flex: 0.5,
        backgroundColor: '#fff',
        justifyContent: 'flex-end'
    },
    bodyInside: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        width: '100%',
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    imgSize: {
        width: 100,
        height: 100,
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
    }
})