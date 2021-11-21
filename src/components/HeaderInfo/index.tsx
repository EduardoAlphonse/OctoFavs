import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

type HeaderInfoProps = {
	title: string;
	data?: string;
};

export const HeaderInfo = ({ title, data }: HeaderInfoProps) => {
	return (
		<View style={styles.headerWrapper}>
			<Text style={styles.text}>{title}</Text>
			{data ? <Text style={styles.text}>{data}</Text> : null}
		</View>
	);
};
