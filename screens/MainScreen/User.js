import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Avatar } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker';
const User = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const [customerData, setCustomerData] = useState([]);
    const [rentalData, setRentalData] = useState([]);
    const fetchData = (value) => {
        setSelectedValue(value);
        if (value === 'owner') {
            // fetch('https://example.com/customers')
            //     .then(response => response.json())
            //     .then(data => setCustomerData(data))
            //     .catch(error => console.error(error));
            setCustomerData([{ name: 'Bilal Dar', email: '3', id: 123 }, { name: 'Ali', email: '4', id: 789 }])
        } else if (value === 'rentals') {
            // fetch('https://example.com/rentals')
            //     .then(response => response.json())
            //     .then(data => setRentalData(data))
            //     .catch(error => console.error(error));
            setRentalData([{ name: 'Usama', email: '321@gmail.com', id: 76876 }, { name: 'Ariz', email: '901@gmail.com', id: 56565 }])
        }
    };
    return (
        <View>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => fetchData(itemValue)}
            >
                <Picker.Item label="Select an option" value="" />
                <Picker.Item label="Owner" value="owner" />
                <Picker.Item label="Rentals" value="rentals" />
            </Picker>
            {selectedValue === 'owner' && (
                <FlatList
                    data={customerData}
                    renderItem={({ item }) => (
                        <View style={styles.header}>
                            <View style={styles.headerStyle}>
                                <Avatar.Image
                                    source={{
                                        uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                    }}
                                    size={50}
                                />
                                <Text>{item.name}</Text>
                                <Text>{item.email}</Text>
                                <TouchableOpacity>
                                    <Text>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            )}
            {selectedValue === 'rentals' && (
                <FlatList
                    data={rentalData}
                    renderItem={({ item }) => (
                        <View style={styles.header}>
                            <View style={styles.headerStyle}>
                                <Avatar.Image
                                    source={{
                                        uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                    }}
                                    size={50}
                                />
                                <Text>{item.name}</Text>
                                <Text>{item.email}</Text>
                                <TouchableOpacity>
                                    <Text>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            )}
        </View>
    )
}

export default User

const styles = StyleSheet.create({
    header: {
        // flexDirection: 'row',
        // justifyContent: 'space-around',
        borderBottomWidth: 1,
        // alignItems: 'center',
        marginTop: 5
    },
    headerStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-between'
    }
})