import { Button, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const ByAdd = () => {
    const [shouldShow, setShouldShow] = useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Suite Setup</Text>
                <TextInput
                    placeholder='Search'
                    style={styles.Searchinput}
                    autoCapitalize='none'
                    onChangeText={text => setSearchQuery(text)}
                    value={searchQuery}
                />
                <MaterialIcons
                    name='notifications'
                    size={30}
                />
            </View>
            <View style={styles.body}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                        <MaterialIcons
                            name='add'
                            size={30}
                        />
                    </TouchableOpacity>
                </View>
                {shouldShow ? (
                    <View style={styles.bodyInside}>
                        <Text>Hello</Text>
                        <TextInput placeholder='hello' />
                        <TextInput placeholder='hello' />
                        <TextInput placeholder='hello' />
                        <TextInput placeholder='hello' />
                        <TextInput placeholder='hello' />
                    </View>
                ) : null}
            </View>
            {/* <View style={styles.footer}>
                <Text>Hello</Text>
            </View> */}
        </View>
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
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-end'
    },
    bodyInside: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        width: '100%',
    },
    // footer: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // }
})