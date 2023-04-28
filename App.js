// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Splash from './screens/Accounts/Splash';
import SignIn from './screens/Accounts/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screens/Accounts/SignUp';
import Otp from './screens/Accounts/Otp';
import Main from './DrawerNavigation/Main';
import OwnerMain from './OwnerDrawerNavigation/OwnerMain';
const Stack = createNativeStackNavigator()
// import { createDrawerNavigator } from '@react-navigation/drawer';
// const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Splash Screen' component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name='Sign In Screen' component={SignIn} />
          <Stack.Screen name='Main' component={Main} options={{ headerShown: false }} />
          <Stack.Screen name='Sign Up Screen' component={SignUp} />
          <Stack.Screen name='OTP' component={Otp} />
          <Stack.Screen name='OwnerMain' component={OwnerMain} options={{ headerShown: false }} />
          {/* <Drawer.Navigator useLegacyImplementation>
            <Drawer.Screen name="Test" component={Test} />
            <Drawer.Screen name="Test1" component={Test1} />
          </Drawer.Navigator> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
});
