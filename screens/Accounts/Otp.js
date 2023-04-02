import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'

const Otp = ({ navigation }) => {
    return (
        <View style={styles.conatiner}>
            <View style={styles.header}>
                <Text style={{ fontSize: 35 }}>Suite Setup</Text>
                <Text style={{ fontSize: 25 }}>Verify Email</Text>
                <Text style={{ fontSize: 15 }}>Enter 4 digits code received on your email</Text>
                <Text style={{ fontSize: 16, marginTop: 10 }}>*****@gmail.com</Text>
            </View>
            <View style={styles.otp}>
                <ScrollView>
                    <OTPInputView
                        style={{ width: "100%", height: 200, paddingHorizontal: 32 }}
                        pinCount={4}
                        autoFocusOnLoad
                        codeInputFieldStyle={{
                            width: 30,
                            height: 45,
                            color: "#f4a135",
                            borderWidth: 0,
                            borderBottomWidth: 3,
                            borderBottomColor: '#111'
                        }}
                        codeInputHighlightStyle={{ borderColor: "#2ab12f" }}
                        onCodeFilled={(code) => console.log(`code is${code}`)}
                    />
                    <TouchableOpacity style={[styles.signIn, { backgroundColor: '#009387' }]} onPress={() => navigation.navigate("Sign In Screen")}>
                        <Text style={[styles.text_signIn, { color: '#fff' }]}>Confirm</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}
export default Otp
const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
    },
    header: {
        flex: 0.5,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    otp: {
        flex: 1,
        // backgroundColor: 'green',
        width: '100%',
        paddingHorizontal: 22,
    },
    signIn: {
        justifyContent: 'center',
        width: '100%',
        height: 50,
        alignItems: 'center',
        borderRadius: 10
    },
    text_signIn: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})