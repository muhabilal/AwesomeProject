import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { app } from '../../firebase'
import { getAuth, signInWithEmailAndPassword, } from 'firebase/auth';
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
});
const SignIn = ({ navigation }) => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth(app);
    const handleLogIn = async (values) => {
        const { email, password } = values;
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            // console.log('LogIn Successful', user);
            if (email == 'admin@gmail.com') {
                navigation.navigate('Main')
            }
            else {
                navigation.navigate('OwnerMain')
            }
        } catch (err) { 'LogIn Error', console.log(err) }
    }
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
                console.log(values);
                handleLogIn(values)
            }}
            validationSchema={LoginSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.text_header}>Welcome!</Text>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.text_footer}>Email</Text>
                        <View style={styles.action}>
                            <MaterialIcons
                                name='email'
                                size={20}
                                marginTop={5}
                            />
                            <TextInput
                                placeholder='Enter Email'
                                onChangeText={handleChange('email')}
                                // onChangeText={(text) => values.setEmail(text)}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                style={styles.textInput} autoCapitalize='none'
                            />
                            {touched.email && errors.email && <Text>{errors.email}</Text>}
                        </View>
                        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name='lock'
                                size={20}
                                marginTop={5}
                            />
                            <TextInput placeholder='Enter Passcode'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={show ? false : true}
                                style={styles.textInput}
                                autoCapitalize='none' />
                            {touched.password && errors.password && <Text>{errors.password}</Text>}
                            <TouchableOpacity onPress={() => setShow(!show)}>
                                < Feather
                                    name={show ? 'eye' : 'eye-off'}
                                    color="grey"
                                    size={20}
                                />

                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity style={[styles.signIn, { backgroundColor: '#009387' }]} onPress={handleSubmit}>
                                <Text style={[styles.text_signIn, { color: '#fff' }]}>Sign In</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.signIn, { borderColor: '#009387', borderWidth: 1, marginTop: 15 }]} onPress={() => navigation.navigate('Sign Up Screen')}>
                                <Text style={[styles.text_signIn, { color: '#009387' }]}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View >
            )}
        </Formik>
    )
}
export default SignIn
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 40
    },
    text_header: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 30,

    },
    footer: {
        flex: 3,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
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