import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Card } from 'react-native-paper';
import StarRating from 'react-native-star-rating';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import { RadioButton } from 'react-native-paper';
const AddApproval = ({ expirationDate }) => {
    const data = [
        { img: 'https://picsum.photos/200', title: 'Card title', address: "Gulberg phase 4,Islamabad" },
        { img: 'https://picsum.photos/200', title: 'Card title', address: "Joher Twon, Lahore" },
        { img: 'https://picsum.photos/200', title: 'Card title', address: "Green Town, Gujrat" }
    ];
    const [rating, setRating] = useState(3);
    const [timeLeft, setTimeLeft] = useState('');
    const [checked, setChecked] = React.useState('first');
    const [searchQuery, setSearchQuery] = React.useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            const now = moment();
            const expiration = moment(expirationDate);
            const diff = expiration.diff(now);
            const duration = moment.duration(diff);
            const daysLeft = duration.asDays().toFixed(0);
            setTimeLeft(`${daysLeft} days left`);
        }, 1000);
        return () => clearInterval(interval);
    }, [expirationDate]);
    const onChangeSearch = ((query) => {
        setSearchQuery(query);
    })
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Suite Setup</Text>
                <TextInput
                    placeholder='Search'
                    style={styles.Searchinput}
                    autoCapitalize='none'
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
                <MaterialIcons
                    name='notifications'
                    size={30}
                />
            </View>
            <View style={styles.footer}>
                <ScrollView>
                    {data.map((item, index) => (
                        <Card key={index} style={{ backgroundColor: '#fff', marginBottom: 10 }}>
                            <Card.Content>
                                {rating < 3 ?
                                    <FontAwesome
                                        name="ban"
                                        color={'red'}
                                        size={100}
                                    /> :
                                    <Card.Cover source={{ uri: item.img }} />}
                                {/* <Image source={require('../MainScreen/Images/home.jpg')} style={{ height: 200, width: '100%' }} /> */}
                                <View style={styles.footerBottom}>
                                    <Text>Rooms: 3</Text>
                                    <Text>BathRoom: 3</Text>
                                    <Text>Kitchen: 3</Text>
                                    <Text>Size: 3</Text>
                                </View>
                                <Text>Address: {item.address}</Text>
                                <Text>Price: 25,000</Text>
                                <View style={{ flexDirection: 'row', gap: 2 }}>
                                    <Text>Rating:</Text>
                                    <StarRating
                                        disabled={false}
                                        maxStars={5}
                                        starSize={20}
                                        rating={rating}
                                        selectedStar={(rating) => setRating(rating)}
                                    />
                                </View>
                                <Text>{timeLeft}</Text>
                                <View style={styles.btn}>
                                    <RadioButton
                                        value="first"
                                        status={checked === 'first' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('first')}
                                        color={'green'}
                                    />
                                    <RadioButton
                                        value="second"
                                        status={checked === 'second' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('second')}
                                        color={'red'}
                                    />
                                </View>
                            </Card.Content>
                        </Card>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

export default AddApproval

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387',
    },
    header: {
        flex: 0.2,
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
    footer: {
        flex: 2,
        backgroundColor: '#fff',
    },
    footerBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10
    }
})