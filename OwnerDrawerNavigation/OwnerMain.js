import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerOwner from './DrawerOwner';
import ByAdd from '../screens/Owner/ByAdd';
import ByBidding from '../screens/Owner/ByBidding';
import Messages from '../screens/Owner/Messages';
import Chat from '../screens/Owner/Chat';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator()
const MessageStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Messages' component={Messages} />
            <Stack.Screen name='Chat' component={Chat} options={({ route }) => ({
                title: route.params.userName
            })} />
        </Stack.Navigator>
    )
}
const OwnerMain = () => {
    return (
        <>
            <Drawer.Navigator drawerOwner={props => <DrawerOwner {...props} />}>
                <Drawer.Screen name="By Ad" component={ByAdd} />
                <Drawer.Screen name="By Bidding" component={ByBidding} />
                <Drawer.Screen name="Message" component={MessageStack} options={{ headerShown: false }} />
            </Drawer.Navigator>
        </>
    )
}

export default OwnerMain