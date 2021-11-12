import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';

import { styles } from './styles';

export const HeaderUser = () => {
	const modalRef = useRef<Modalize>(null);

	const user = {
		username: 'EduardoAlphonse',
		avatar: 'https://avatars.githubusercontent.com/u/43072438?v=4',
	};

	return (
		<View style={styles.headerWrapper}>
			<Text style={styles.username}>{user.username}</Text>
			<TouchableOpacity hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}>
				<Image source={{ uri: user.avatar }} style={styles.avatar} />
			</TouchableOpacity>
		</View>
	);
};
