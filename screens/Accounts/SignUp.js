import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { app } from '../../firebase'
import { getAuth, createUserWithEmailAndPassword, } from 'firebase/auth';
import firestore from '@react-native-firebase/firestore';
const LoginSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Z\s]*$/, 'Please enter a valid name')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
});

const SignUp = ({ navigation }) => {
    const [show, setShow] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const auth = getAuth(app);
    const handleSignUp = async (values) => {
        const { email, password, name, role } = values;
        try {
            // const user = await createUserWithEmailAndPassword(auth, email, password, name, role);
            const user = await createUserWithEmailAndPassword(auth, email, password)
            firestore().collection('users').doc(auth().currentUser.uid).set({
                uid: auth().currentUser.uid,
                name,
                role,
                email
            })
            console.log("Account created: ", user)
        }
        catch (error) {
            console.log('Account creation failed', error);
        }
    }
    return (
        <Formik
            initialValues={{ email: email, password: password, name: name, role: role }}
            onSubmit={(values) => {
                handleSignUp(values);
                navigation.navigate('OTP');
            }}
            // onSubmit={values => console.log(values)}
            validationSchema={LoginSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.text_header}>Register Your Account</Text>
                    </View>
                    <View style={styles.footer}>
                        <ScrollView>
                            <Text style={styles.text_footer}>Full Name</Text>
                            <View style={styles.action}>
                                <MaterialIcons
                                    name='person'
                                    size={20}
                                    marginTop={5}
                                />
                                <TextInput
                                    placeholder='Enter Name'
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    value={values.name}
                                    style={styles.textInput} autoCapitalize='none'
                                />
                                {touched.name && errors.name && <Text>{errors.name}</Text>}
                            </View>
                            <Text style={[styles.text_footer, { marginTop: 30 }]}>Email</Text>
                            <View style={styles.action}>
                                <MaterialIcons
                                    name='email'
                                    size={20}
                                    marginTop={5}
                                />
                                <TextInput
                                    placeholder='Enter Email'
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    style={styles.textInput} autoCapitalize='none'
                                />
                                {touched.email && errors.email && <Text>{errors.email}</Text>}
                            </View>
                            <Text style={[styles.text_footer, { marginTop: 30 }]}>Role</Text>
                            <View style={styles.action}>
                                <MaterialIcons
                                    name='supervised-user-circle'
                                    size={20}
                                    marginTop={5}
                                />
                                <TextInput
                                    placeholder='Who are you Owner/Rental'
                                    onChangeText={handleChange('role')}
                                    onBlur={handleBlur('role')}
                                    value={values.role}
                                    style={styles.textInput} autoCapitalize='none'
                                />
                            </View>
                            <Text style={[styles.text_footer, { marginTop: 30 }]}>Password</Text>
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
                                    <Text style={[styles.text_signIn, { color: '#fff' }]}>Next</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View >
            )}
        </Formik>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387',
    },
    header: {
        flex: 0.7,
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
        flex: 3.5,
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