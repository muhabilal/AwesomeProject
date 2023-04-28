import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AddApproval from '../screens/MainScreen/AddApproval';
import AddApprovalFix from '../screens/MainScreen/AddApprovalFix';
import HouseList from '../screens/MainScreen/HouseList';
import User from '../screens/MainScreen/User';
import TotalRecord from '../screens/MainScreen/TotalRecord';
import DrawerContent from './DrawerContent';
const Drawer = createDrawerNavigator();
const Main = () => {
    return (
        <>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="Add Approval (Biding)" component={AddApproval} />
                {/* <Drawer.Screen name="Add Approval (Fixed)" component={AddApprovalFix} />
                <Drawer.Screen name="House White/Black List" component={HouseList} />
                <Drawer.Screen name="User Ban/UnBan" component={User} />
                <Drawer.Screen name="Total Record" component={TotalRecord} /> */}
            </Drawer.Navigator>
        </>
    )
}

export default Main
