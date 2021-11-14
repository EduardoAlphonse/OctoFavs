import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Profile } from '../components/ProfileCard';
import { COLLECTION_PROFILES } from '../config/database';

export const saveProfile = async (user: Profile) => {
	try {
		const profiles = await listProfiles();

		profiles.unshift(user);

		await AsyncStorage.setItem(COLLECTION_PROFILES, JSON.stringify(profiles));

		return profiles;
	} catch (error) {
		Alert.alert('Não foi possível salvar o perfil.');
	}
};

export const removeProfile = async (user: Profile) => {
	try {
		const profiles = await listProfiles();

		const newProfiles = profiles.filter(
			(profile: Profile) => profile.id !== user.id
		);

		await AsyncStorage.setItem(
			COLLECTION_PROFILES,
			JSON.stringify(newProfiles)
		);

		return newProfiles;
	} catch (error) {
		console.log('Não foi possível remover o perfil.');
	}
};

export const listProfiles = async () => {
	try {
		const profiles = await AsyncStorage.getItem(COLLECTION_PROFILES);
		if (profiles) {
			return JSON.parse(profiles);
		}

		return [];
	} catch (error) {
		console.log('Não foi possível listar os perfis salvos.');
	}
};

export const clearStorage = async () => await AsyncStorage.clear();
