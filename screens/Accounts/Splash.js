import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Text>Here is Logo</Text> */}
        <Image source={require('../Accounts/assests/logo1.png')} style={styles.logo} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Stay Connected with Everyone</Text>
        <Text style={styles.text}>SignIn with Account</Text>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={() => navigation.navigate('Sign In Screen')}>
            <Text style={styles.textSignIn}>Get Started</Text>
            <MaterialIcons
              name='navigate-next'
              color="#fff"
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Splash
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387'
    // backgroundColor: 'black'

  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#05375a',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: '#009387'
  },
  textSignIn: {
    color: "white",
    fontWeight: "bold",
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  }
})