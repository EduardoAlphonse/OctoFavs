import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import { Onboarding } from '../screens/Onboarding';

// stacks
import { BottomTabNavigator } from './stacks';

import { ProfileModal } from '../components/ProfileModal';
import { ProfileModalContextProvider } from '../contexts/ProfileModalContext';
import { StorageContextProvider } from '../contexts/StorageContext';

export type RootStackParamList = {
	Onboarding: undefined;
	HomeStack: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
	return (
		<StorageContextProvider>
			<ProfileModalContextProvider>
				<NavigationContainer>
					<RootStack.Navigator
						screenOptions={{
							headerShown: false,
						}}
					>
						<RootStack.Screen name="Onboarding" component={Onboarding} />

						<RootStack.Screen name="HomeStack" component={BottomTabNavigator} />
					</RootStack.Navigator>
				</NavigationContainer>

				<ProfileModal />
			</ProfileModalContextProvider>
		</StorageContextProvider>
	);
};
