import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerOwner from './DrawerOwner';
import ByAdd from '../screens/Owner/ByAdd';
const Drawer = createDrawerNavigator();
const OwnerMain = () => {
    return (
        <>
            <Drawer.Navigator drawerOwner={props => <DrawerOwner {...props} />}>
                <Drawer.Screen name="By Ad" component={ByAdd} />
            </Drawer.Navigator>
        </>
    )
}

export default OwnerMain