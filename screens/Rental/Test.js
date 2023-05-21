import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const filters = ['Price', 'Room', 'Size'];
const Test = () => {
    const data = [
        { img: 'https://picsum.photos/200', rooms: 8, kitchen: 2, size: 5, price: 25000 },
        { img: 'https://picsum.photos/200', rooms: 9, kitchen: 2, size: 6, price: 30000 },
        { img: 'https://picsum.photos/200', rooms: 10, kitchen: 2, size: 7, price: 40000 },
        { img: 'https://picsum.photos/200', rooms: 10, kitchen: 2, size: 7, price: 40000 },
        { img: 'https://picsum.photos/200', rooms: 10, kitchen: 2, size: 7, price: 40000 },
        { img: 'https://picsum.photos/200', rooms: 10, kitchen: 2, size: 7, price: 40000 },
        { img: 'https://picsum.photos/200', rooms: 10, kitchen: 2, size: 7, price: 40000 },
    ]
    const [selectedFilter, setSelectedFilter] = useState('Price');
    const [filterValue, setFilterValue] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const handleFilterSelection = (filter) => {
        setSelectedFilter(filter);
    };
    const handleSearch = () => {
        // Implement the logic to search for houses based on the selected filter and value
        // For example, you could query a database or an API to retrieve a list of houses that meet the criteria
        // Then you could display the results to the user in a table or a list format
        let filteredData = data;
        if (selectedFilter === 'Price') {
            filteredData = data.filter(item => item.price === parseInt(filterValue));
        } else if (selectedFilter === 'Room') {
            filteredData = data.filter(item => item.rooms === parseInt(filterValue));
        } else if (selectedFilter === 'Size') {
            filteredData = data.filter(item => item.size === parseInt(filterValue));
        }
        setFilteredData(filteredData);
    };
    const renderItem = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image style={{ width: 100, height: 100, marginRight: 10 }} source={{ uri: item.img }} />
                <View>
                    <Text>Rooms: {item.rooms}</Text>
                    <Text>Kitchen: {item.kitchen}</Text>
                    <Text>Size: {item.size}</Text>
                    <Text>Price: {item.price}</Text>
                </View>
            </View>
        );
    };
    return (
        <>
            <View>
                <Text>Select a filter:</Text>
                <Picker
                    selectedValue={selectedFilter}
                    onValueChange={handleFilterSelection}
                >
                    {filters.map((filter) => (
                        <Picker.Item key={filter} label={filter} value={filter} />
                    ))}
                </Picker>
                <Text>Enter the value:</Text>
                <TextInput
                    value={filterValue}
                    onChangeText={(value) => setFilterValue(value)}
                    keyboardType={selectedFilter === 'Price' ? 'numeric' : 'default'}
                />
                <Button title="Search" onPress={handleSearch} />
            </View>
            <View>
                <FlatList
                    data={filteredData}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </>
    )
}

export default Test

const styles = StyleSheet.create({})