import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { BottomTabStackParamList } from '../../navigation/stacks';
import { Button } from '../../components/Button';
import { ProfileCard } from '../../components/ProfileCard';
import { HeaderInfo } from '../../components/HeaderInfo';
import { useStorage } from '../../hooks/useStorage';

import { styles } from './styles';

type HomeNavigationProps = NativeStackNavigationProp<
	BottomTabStackParamList,
	'Home'
>;

export function Home() {
	const { savedProfiles } = useStorage();
	const { navigate } = useNavigation<HomeNavigationProps>();

	const handleSearchProfile = () => {
		navigate('AddProfile');
	};

	return (
		<View style={styles.container}>
			{savedProfiles?.length ? (
				<HeaderInfo
					title="Perfis salvos"
					data={savedProfiles?.length.toString()}
				/>
			) : null}

			<View style={styles.content}>
				{savedProfiles?.length ? (
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
