import React from 'react';
import {
	Text,
	TouchableOpacity,
	Image,
	TouchableOpacityProps,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Profile } from '../ProfileCard';
import { useStorage } from '../../hooks/useStorage';

import { styles } from './styles';
import { colors } from '../../styles';

type ProfileCardProps = TouchableOpacityProps & {
	data: Profile;
	marginStyle: {};
};

export const ProfileSearchCard = ({
	data,
	marginStyle,
	...props
}: ProfileCardProps) => {
	const { savedProfiles } = useStorage();

	const isProfileSaved = !!savedProfiles.filter(
		(profile) => profile.id === data.id
	).length;

	return (
		<TouchableOpacity
			style={[styles.card, marginStyle]}
			activeOpacity={0.4}
			{...props}
		>
			<Image source={{ uri: data.avatar_url }} style={styles.avatar} />
			<Text style={styles.username}>{data.login}</Text>
			{isProfileSaved ? (
				<AntDesign
					name="star"
					size={14}
					color={colors.primary}
					style={styles.star}
				/>
			) : null}
		</TouchableOpacity>
	);
};
