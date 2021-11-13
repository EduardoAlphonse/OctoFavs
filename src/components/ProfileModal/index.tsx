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
import { IHandles } from 'react-native-modalize/lib/options';

import { RepositoryCard } from '../RepositoryCard';
import { api } from '../../services/api';

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

type UserResponse = {
	login: string;
	name: string;
	avatar_url: string;
};

type UserData = {
	login: string;
	name: string;
	avatar_url: string;
	repositories: RepositoriesResponse[];
};

type ProfileModalProps = {
	username: string;
	closeModal: () => void;
	modalRef: RefObject<IHandles>;
};

export const ProfileModal = ({
	username,
	closeModal,
	modalRef,
}: ProfileModalProps) => {
	const [userData, setUserData] = useState<UserData>();
	const [isloading, setIsLoading] = useState(true);

	const getUserData = async () => {
		const { data: userInfo } = await api.get<UserResponse>(
			`/users/${username}`
		);
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
		setIsLoading(true);
		// if (username) {
		getUserData();
		// }
	}, [username]);

	return isloading ? (
		<Modalize
			ref={modalRef}
			modalStyle={styles.modalStyle}
			threshold={60}
			modalHeight={Dimensions.get('window').height * 0.8}
			HeaderComponent={
				<ModalHeader
					username={username}
					title={userData?.name}
					avatar={userData?.avatar_url}
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
					username={username}
					title={userData?.name}
					avatar={userData?.avatar_url}
					closeModal={closeModal}
				/>
			}
		/>
	);
};

const Separator = () => <View style={{ height: 20 }} />;

type ModalHeaderProps = {
	username: string;
	title: string | undefined;
	avatar: string | undefined;
	isLoading?: boolean;
	closeModal: () => void;
};

const ModalHeader = ({
	username,
	title,
	avatar,
	isLoading,
	closeModal,
}: ModalHeaderProps) => (
	<View style={styles.headerContainer}>
		<View style={styles.header}>
			<TouchableOpacity
				onPress={closeModal}
				hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
			>
				<Feather name="arrow-left" size={24} color={colors.textLight} />
			</TouchableOpacity>

			<Text style={styles.username}>
				{/* <AntDesign
					name="github"
					size={16}
					color={colors.textLight}
				/> */}
				{username}
			</Text>
		</View>

		<View style={styles.userDataContainer}>
			{isLoading ? (
				<>
					<AntDesign name="github" size={100} color={colors.accent} />
					<Text style={[styles.title, { color: colors.accent }]}>
						{username}
					</Text>
				</>
			) : (
				<View style={styles.userDataWrapper}>
					<Image source={{ uri: avatar }} style={styles.avatar} />
					<Text style={styles.title}>{title}</Text>
					<TouchableOpacity
						onPress={() => {}}
						hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
						style={styles.starButton}
					>
						<AntDesign name="staro" size={24} color={colors.primary} />
					</TouchableOpacity>
				</View>
			)}
		</View>

		<Text style={styles.subtitle}>Repositórios</Text>
	</View>
);
