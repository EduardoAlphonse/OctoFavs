import React from 'react';
import {
	Text,
	TouchableOpacity,
	Image,
	TouchableOpacityProps,
} from 'react-native';

import { styles } from './styles';

export type Profile = {
	id: number;
	login: string;
	avatar_url: string;
};

type ProfileCardProps = TouchableOpacityProps & {
	data: Profile;
	marginStyle: {};
};

export const ProfileSearchCard = ({
	data,
	marginStyle,
	...props
}: ProfileCardProps) => {
	return (
		<TouchableOpacity
			style={[styles.card, marginStyle]}
			activeOpacity={0.4}
			{...props}
		>
			<Image source={{ uri: data.avatar_url }} style={styles.avatar} />
			<Text style={styles.username}>{data.login}</Text>
		</TouchableOpacity>
	);
};
