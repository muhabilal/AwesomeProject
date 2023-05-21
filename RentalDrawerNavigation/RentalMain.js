import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent'
import Test from '../screens/Rental/Test';
const Drawer = createDrawerNavigator();
const RentalMain = () => {
    return (
        <>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="Test" component={Test} />
            </Drawer.Navigator>
        </>
    )
}

export default RentalMain

const styles = StyleSheet.create({})