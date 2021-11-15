import React, { useEffect, useState, RefObject } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ActivityIndicator,
	Dimensions,
} from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';

import { RepositoryCard } from '../RepositoryCard';
import { Profile } from '../ProfileCard';
import { api } from '../../services/api';
import { useStorage } from '../../hooks/useStorage';
import { useProfileModal } from '../../hooks/useProfileModal';

import { styles } from './styles';
import { colors } from '../../styles';

type RepositoriesResponse = {
	id: number;
	name: string;
	html_url: string;
	description: string;
	language: string | null;
	stargazers_count: number;
	updated_at: string;
};

type UserData = Profile & {
	repositories: RepositoriesResponse[];
};

export const ProfileModal = () => {
	const [userData, setUserData] = useState<UserData>({} as UserData);
	const [isloading, setIsLoading] = useState(true);

	const { username, modalRef, closeModal } = useProfileModal();

	const getUserData = async () => {
		setIsLoading(true);

		const { data: userInfo } = await api.get<Profile>(`/users/${username}`);
		const { data: userRepositories } = await api.get<RepositoriesResponse[]>(
			`/users/${username}/repos?sort=updated`
		);

		const userData: UserData = {
			...userInfo,
			repositories: userRepositories,
		};

		setUserData(userData);
		setIsLoading(false);
	};

	useEffect(() => {
		if (username) {
			getUserData();
		}
	}, [username]);

	return isloading ? (
		<Modalize
			ref={modalRef}
			modalStyle={styles.modalStyle}
			threshold={60}
			modalHeight={Dimensions.get('window').height * 0.8}
			HeaderComponent={
				<ModalHeader
					id={userData?.id}
					login={username}
					name={userData?.name}
					avatar_url={userData?.avatar_url}
					closeModal={closeModal}
					isLoading
				/>
			}
		>
			{isloading && (
				<View style={{ height: 300, justifyContent: 'center' }}>
					<ActivityIndicator size="large" color={colors.accent} />
				</View>
			)}
		</Modalize>
	) : (
		<Modalize
			ref={modalRef}
			modalStyle={styles.modalStyle}
			childrenStyle={{
				margin: 20,
				borderRadius: 20,
				overflow: 'hidden',
			}}
			threshold={60}
			modalHeight={Dimensions.get('window').height * 0.8}
			flatListProps={{
				data: userData?.repositories,
				renderItem: ({ item }) => <RepositoryCard data={item} />,
				keyExtractor: (item) => item.id,
				showsVerticalScrollIndicator: false,
				ItemSeparatorComponent: Separator,
				contentContainerStyle: { justifyContent: 'center' },
			}}
			HeaderComponent={
				<ModalHeader
					id={userData?.id}
					login={username}
					name={userData?.name}
					avatar_url={userData?.avatar_url}
					closeModal={closeModal}
				/>
			}
		/>
	);
};

const Separator = () => <View style={{ height: 20 }} />;

type ModalHeaderProps = {
	id: number;
	login: string;
	name: string;
	avatar_url: string;
	isLoading?: boolean;
	closeModal: () => void;
};

const ModalHeader = ({
	id,
	login,
	name,
	avatar_url,
	isLoading,
	closeModal,
}: ModalHeaderProps) => {
	const { saveProfileToState, removeProfileFromState, savedProfiles } =
		useStorage();

	const isProfileSaved = !!savedProfiles.filter((profile) => profile.id === id)
		.length;

	const user: Profile = {
		id,
		login,
		name,
		avatar_url,
	};

	const handleSaveProfile = () => {
		saveProfileToState(user);
	};

	const handleRemoveProfile = () => {
		removeProfileFromState(user);
	};

	return (
		<View style={styles.headerContainer}>
			<View style={styles.header}>
				<TouchableOpacity
					onPress={closeModal}
					hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
				>
					<Feather name="arrow-left" size={24} color={colors.textLight} />
				</TouchableOpacity>

				<Text style={styles.username}>{login}</Text>
			</View>

			<View style={styles.userDataContainer}>
				{isLoading ? (
					<>
						<AntDesign name="github" size={100} color={colors.accent} />
						<Text style={[styles.title, { color: colors.accent }]}>
							{login}
						</Text>
					</>
				) : (
					<View style={styles.userDataWrapper}>
						<Image source={{ uri: avatar_url }} style={styles.avatar} />
						<Text style={styles.title}>{name}</Text>

						{isProfileSaved ? (
							<TouchableOpacity
								onPress={handleRemoveProfile}
								hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
								style={styles.starButton}
							>
								<AntDesign name="star" size={24} color={colors.primary} />
							</TouchableOpacity>
						) : (
							<TouchableOpacity
								onPress={handleSaveProfile}
								hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
								style={styles.starButton}
							>
								<AntDesign name="staro" size={24} color={colors.primary} />
							</TouchableOpacity>
						)}
					</View>
				)}
			</View>

			<Text style={styles.subtitle}>Repositórios</Text>
		</View>
	);
};
