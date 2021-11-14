import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign } from '@expo/vector-icons';

import { StorageContextProvider } from '../contexts/StorageContext';

// screens
import { Home } from '../screens/Home';
import { AddProfile } from '../screens/AddProfile';

import { colors, typography } from '../styles';

export type BottomTabStackParamList = {
	Home: undefined;
	AddProfile: undefined;
	AddProfile2: undefined;
};

const BottomTabStack = createBottomTabNavigator<BottomTabStackParamList>();

export const BottomTabNavigator = () => {
	return (
		<StorageContextProvider>
			<BottomTabStack.Navigator
				screenOptions={{
					tabBarActiveTintColor: colors.primary,
					tabBarLabelStyle: { ...typography.textSmall },
					tabBarStyle: styles.tabBarStyle,
					headerShown: false,
				}}
				backBehavior="none"
			>
				<BottomTabStack.Screen
					name="Home"
					component={Home}
					options={{
						tabBarLabel: 'Perfis',
						tabBarIcon: (props) => (
							<Entypo name="github" size={20} color={props.color} />
						),
					}}
				/>
				<BottomTabStack.Screen
					name="AddProfile"
					component={AddProfile}
					options={{
						tabBarLabel: 'Adicionar',
						tabBarIcon: (props) => (
							<AntDesign name="pluscircleo" size={20} color={props.color} />
						),
					}}
				/>
			</BottomTabStack.Navigator>
		</StorageContextProvider>
	);
};

const styles = StyleSheet.create({
	tabBarStyle: {
		backgroundColor: colors.backgroundLight,
		borderTopColor: 'transparent',
		paddingBottom: 10,
		height: 70,
	},
});
