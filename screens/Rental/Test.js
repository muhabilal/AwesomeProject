import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const filters = ['Price', 'Room', 'Size'];
const Test = () => {
    const [selectedFilter, setSelectedFilter] = useState('Price');
    const [filterValue, setFilterValue] = useState('');

    const handleFilterSelection = (filter) => {
        setSelectedFilter(filter);
    };
    const handleSearch = () => {
        // Implement the logic to search for houses based on the selected filter and value
        // For example, you could query a database or an API to retrieve a list of houses that meet the criteria
        // Then you could display the results to the user in a table or a list format
    };
    return (
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
    )
}

export default Test

const styles = StyleSheet.create({})