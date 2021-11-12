import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

export type Profile = {
	id: number;
	avatar: string;
	name: string;
	username: string;
	lastUpdate: string;
};

type ProfileCardProps = {
	data: Profile;
};

export const ProfileCard = ({ data }: ProfileCardProps) => {
	return (
		<TouchableOpacity style={styles.card} activeOpacity={0.4}>
			<Image source={{ uri: data.avatar }} style={styles.avatar} />
			<View style={styles.data}>
				<View style={styles.nameWrapper}>
					<Text style={styles.name}>{data.name}</Text>
					<Text style={styles.username}>{data.username}</Text>
				</View>

				<Text style={styles.lastUpdate}>
					Última atualização: {data.lastUpdate}
				</Text>
			</View>
		</TouchableOpacity>
	);
};
