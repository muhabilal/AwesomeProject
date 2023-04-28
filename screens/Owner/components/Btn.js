import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Btn = (props) => {
    return (
        <View style={styles.action}>
            <TouchableOpacity style={styles.button} onPress={props.press}>
                <Text style={styles.text_btn}>{props.btnName}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Btn

const styles = StyleSheet.create({
    action: {
        marginTop: 10,
    },
    button: {
        justifyContent: 'center',
        width: '100%',
        height: 50,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#009387'
    },
    text_btn: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
})