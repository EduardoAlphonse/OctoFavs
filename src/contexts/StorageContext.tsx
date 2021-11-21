import React, { useState, useEffect, createContext, ReactNode } from 'react';

import { Profile } from '../components/ProfileCard';
import {
	saveProfile,
	listProfiles,
	removeProfile,
	clearStorage,
	getConfig,
} from '../services/storage';

type StorageContextData = {
	savedProfiles: Profile[];
	openOnce: boolean;
	loadProfilesToState: () => void;
	saveProfileToState: (user: Profile) => void;
	removeProfileFromState: (user: Profile) => void;
	clearProfiles: () => void;
};

export const StorageContext = createContext({} as StorageContextData);

type StorageContextProviderProps = {
	children: ReactNode;
};

export const StorageContextProvider = ({
	children,
}: StorageContextProviderProps) => {
	const [savedProfiles, setSavedProfiles] = useState<Profile[]>([]);
	const [openOnce, setOpenOnce] = useState(false);

	const loadProfilesToState = async () => {
		const storedProfiles = await listProfiles();

		setSavedProfiles(storedProfiles);
	};

	const saveProfileToState = async (user: Profile) => {
		user = {
			...user,
			name: user.name ?? 'Usuário sem nome 🐙',
		};

		const newState = await saveProfile(user);

		setSavedProfiles(newState);
	};

	const removeProfileFromState = async (user: Profile) => {
		const newState = await removeProfile(user);

		setSavedProfiles(newState);
	};

	const clearProfiles = async () => {
		await clearStorage();

		setSavedProfiles([]);
	};

	useEffect(() => {
		(async () => {
			const configResponse = await getConfig();
			if (configResponse.openOnce) {
				setOpenOnce(true);
			}
		})();
	}, []);

	useEffect(() => {
		// clearStorage();
		loadProfilesToState();
	}, []);

	return (
		<StorageContext.Provider
			value={{
				savedProfiles,
				openOnce,
				loadProfilesToState,
				saveProfileToState,
				removeProfileFromState,
				clearProfiles,
			}}
		>
			{children}
		</StorageContext.Provider>
	);
};
