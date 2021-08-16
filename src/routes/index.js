import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Contacts from '../pages/Contacts';
import Information from '../pages/Information';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const routes = () => {
	return (
		<Tab.Navigator initialRouteName='Contacts'>
			<Tab.Screen name="Contacts" component={Contacts} />
			<Tab.Screen name="Information" component={Information} />
		</Tab.Navigator>
	);
};

export default routes;
