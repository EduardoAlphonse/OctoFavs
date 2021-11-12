import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { BottomTabStackParamList } from '../../navigation/stacks';
import { Button } from '../../components/Button';
import { ProfileCard, Profile } from '../../components/ProfileCard';
import { HeaderUser } from '../../components/HeaderUser';

import { styles } from './styles';

type HomeNavigationProps = NativeStackNavigationProp<
	BottomTabStackParamList,
	'Home'
>;

export function Home() {
	const [savedProfiles, setSavedProfiles] = useState<Profile[] | null>(null);
	const { navigate } = useNavigation<HomeNavigationProps>();

	// const profiles = [
	// 	{
	// 		id: 1,
	// 		avatar: 'https://avatars.githubusercontent.com/u/43072438?v=4',
	// 		name: 'Eduardo Oliveira',
	// 		username: 'EduardoAlphonse',
	// 		lastUpdate: '09/11/2021',
	// 	},
	// 	{
	// 		id: 2,
	// 		avatar: 'https://avatars.githubusercontent.com/u/43072438?v=4',
	// 		name: 'Eduardo Oliveira',
	// 		username: 'EduardoAlphonse',
	// 		lastUpdate: '09/11/2021',
	// 	},
	// 	{
	// 		id: 3,
	// 		avatar: 'https://avatars.githubusercontent.com/u/43072438?v=4',
	// 		name: 'Eduardo Oliveira',
	// 		username: 'EduardoAlphonse',
	// 		lastUpdate: '09/11/2021',
	// 	},
	// 	{
	// 		id: 4,
	// 		avatar: 'https://avatars.githubusercontent.com/u/43072438?v=4',
	// 		name: 'Eduardo Oliveira',
	// 		username: 'EduardoAlphonse',
	// 		lastUpdate: '09/11/2021',
	// 	},
	// 	{
	// 		id: 5,
	// 		avatar: 'https://avatars.githubusercontent.com/u/43072438?v=4',
	// 		name: 'Eduardo Oliveira',
	// 		username: 'EduardoAlphonse',
	// 		lastUpdate: '09/11/2021',
	// 	},
	// 	{
	// 		id: 6,
	// 		avatar: 'https://avatars.githubusercontent.com/u/43072438?v=4',
	// 		name: 'Eduardo Oliveira',
	// 		username: 'EduardoAlphonse',
	// 		lastUpdate: '09/11/2021',
	// 	},
	// 	{
	// 		id: 7,
	// 		avatar: 'https://avatars.githubusercontent.com/u/43072438?v=4',
	// 		name: 'Eduardo Oliveira',
	// 		username: 'EduardoAlphonse',
	// 		lastUpdate: '09/11/2021',
	// 	},
	// 	{
	// 		id: 8,
	// 		avatar: 'https://avatars.githubusercontent.com/u/43072438?v=4',
	// 		name: 'Eduardo Oliveira',
	// 		username: 'EduardoAlphonse',
	// 		lastUpdate: '09/11/2021',
	// 	},
	// ];

	const handleSearchProfile = () => {
		navigate('AddProfile');
	};

	useEffect(() => {
		// setSavedProfiles(profiles);
	}, []);

	return (
		<View style={styles.container}>
			<HeaderUser />

			<View style={styles.content}>
				{savedProfiles ? (
					<View style={styles.userListWrapper}>
						<FlatList
							data={savedProfiles}
							renderItem={({ item }) => <ProfileCard data={item} />}
							keyExtractor={(item) => String(item.id)}
							ItemSeparatorComponent={Separator}
							showsVerticalScrollIndicator={false}
						/>
					</View>
				) : (
					<View style={styles.emptyListMessageWrapper}>
						<Text style={styles.emptyListMessage}>
							Não há nada por aqui ainda, que tal começar a adicionar alguns
							perfis?
						</Text>

						<Button onPress={handleSearchProfile}>
							<Text style={styles.buttonText}>Vamos lá!</Text>
						</Button>
					</View>
				)}
			</View>
		</View>
	);
}

const Separator = () => <View style={{ height: 20 }} />;
