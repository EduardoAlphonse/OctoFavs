import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useStorage } from '../../hooks/useStorage';

import { colors } from '../../styles';
import { styles } from './styles';

export type Profile = {
	id: number;
	login: string;
	avatar_url: string;
	name: string;
};

type ProfileCardProps = {
	data: Profile;
};

export const ProfileCard = ({ data }: ProfileCardProps) => {
	const { removeProfileFromState } = useStorage();
	
	return (
		<TouchableOpacity style={styles.card} activeOpacity={0.4}>
			<Image source={{ uri: data.avatar_url }} style={styles.avatar} />
			<View style={styles.data}>
				<View style={styles.nameWrapper}>
					<Text style={styles.name}>{data.name ?? 'Sem nome 🐙'}</Text>
					<TouchableOpacity
						onPress={() => removeProfileFromState(data)}
						hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
					>
						<AntDesign name="star" size={20} color={colors.primary} />
					</TouchableOpacity>
				</View>

				<Text style={styles.username}>{data.login}</Text>
			</View>
		</TouchableOpacity>
	);
};
