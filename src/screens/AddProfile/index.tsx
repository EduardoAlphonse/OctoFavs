import React, { useEffect, useRef, useState } from 'react';
import {
	View,
	Text,
	FlatList,
	TextInput,
	ActivityIndicator,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';

import { Profile, ProfileSearchCard } from '../../components/ProfileSearchCard';
import { HeaderUser } from '../../components/HeaderUser';
import { ProfileModal } from '../../components/ProfileModal';
import { api } from '../../services/api';

import { colors } from '../../styles';
import { styles } from './styles';

type SearchProfilesResponse = {
	items: Profile[];
};

export function AddProfile() {
	const [profilesFound, setProfilesFound] = useState<Profile[] | null>(null);
	const [inputText, setInputText] = useState('');
	const [isSearching, setIsSearching] = useState(false);
	const [selectedUser, setSelectedUser] = useState('');

	const modalRef = useRef<Modalize>(null);
	const inputRef = useRef<TextInput>(null);

	const searchProfiles = async (username: string) => {
		const { data } = await api.get<SearchProfilesResponse>(
			`/search/users?q=${username}`
		);
		const parsedData = data.items.map(({ id, login, avatar_url }) => {
			return {
				id,
				login,
				avatar_url,
			};
		});

		setIsSearching(false);
		setProfilesFound(parsedData);

		if (parsedData.length) {
			inputRef.current?.blur();
		}
	};

	const handleSelectUser = (username: string) => {
		setSelectedUser(username);
		modalRef.current?.open();
	};

	const handleCloseModal = () => {
		modalRef.current?.close();
	};

	useEffect(() => {
		if (inputText) {
			setIsSearching(true);

			const timeout = setTimeout(() => {
				searchProfiles(inputText);
			}, 1000);
			return () => clearTimeout(timeout);
		} else {
			setIsSearching(false);
			setProfilesFound(null);
		}
	}, [inputText]);

	return (
		<View style={styles.container}>
			<HeaderUser />

			<View style={styles.content}>
				{profilesFound && !isSearching ? (
					<View style={styles.userListWrapper}>
						{profilesFound.length > 0 ? (
							<FlatList
								data={profilesFound}
								renderItem={({ item, index }) => (
									<ProfileSearchCard
										onPress={() => handleSelectUser(item.login)}
										data={item}
										marginStyle={
											profilesFound.length < 2
												? {}
												: profilesFound.length - 1 === index &&
												  profilesFound.length % 2 !== 0
												? {}
												: index % 2 === 0
												? { marginRight: 10 }
												: { marginLeft: 10 }
										}
									/>
								)}
								keyExtractor={(item) => String(item.id)}
								ItemSeparatorComponent={Separator}
								showsVerticalScrollIndicator={false}
								numColumns={2}
							/>
						) : (
							<View style={styles.emptyListMessageWrapper}>
								<AntDesign name="frowno" size={48} color={colors.text} />
								<Text style={[styles.emptyListMessage, { marginTop: 40 }]}>
									Ops! Não encontramos nenhum perfil,{' '}
									<Text style={{ color: colors.danger }}>
										verifique o que você digitou.
									</Text>
								</Text>
							</View>
						)}
					</View>
				) : (
					<View style={styles.emptyListMessageWrapper}>
						{isSearching ? (
							<ActivityIndicator size="large" color={colors.accent} />
						) : (
							<Text style={styles.emptyListMessage}>
								Comece procurando por um perfil na caixa de pesquisa abaixo.
							</Text>
						)}
					</View>
				)}
			</View>

			<View style={styles.inputWrapper}>
				<TextInput
					style={styles.input}
					placeholder="Procure aqui.."
					placeholderTextColor={colors.gray}
					value={inputText}
					onChangeText={setInputText}
					ref={inputRef}
				/>
				<AntDesign
					name="search1"
					size={20}
					color={colors.text}
					style={styles.searchIcon}
				/>
			</View>

			<ProfileModal
				modalRef={modalRef}
				closeModal={handleCloseModal}
				username={selectedUser}
			/>
		</View>
	);
}

const Separator = () => <View style={{ height: 20 }} />;
