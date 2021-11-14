import React, { useState, useEffect, createContext, ReactNode } from 'react';

import { Profile } from '../components/ProfileCard';
import { saveProfile, listProfiles, removeProfile } from '../services/storage';

type StorageContextData = {
	savedProfiles: Profile[];
	loadProfilesToState: () => void;
	saveProfileToState: (user: Profile) => void;
	removeProfileFromState: (user: Profile) => void;
};

export const StorageContext = createContext({} as StorageContextData);

type StorageContextProviderProps = {
	children: ReactNode;
};

export const StorageContextProvider = ({
	children,
}: StorageContextProviderProps) => {
	const [savedProfiles, setSavedProfiles] = useState<Profile[]>([]);

	const loadProfilesToState = async () => {
		const storedProfiles = await listProfiles();

		setSavedProfiles(storedProfiles);
	};

	const saveProfileToState = async (user: Profile) => {
		const newState = await saveProfile(user);

		setSavedProfiles(newState);
	};

	const removeProfileFromState = async (user: Profile) => {
		const newState = await removeProfile(user);

		setSavedProfiles(newState);
	};

	useEffect(() => {
		loadProfilesToState();
	}, []);

	return (
		<StorageContext.Provider
			value={{
				savedProfiles,
				loadProfilesToState,
				saveProfileToState,
				removeProfileFromState,
			}}
		>
			{children}
		</StorageContext.Provider>
	);
};
