import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

import { styles } from './styles';

type TabBarButtonProps = BottomTabBarButtonProps & {
	label: string;
};

export const TabBarButton = ({ label, ...props }: TabBarButtonProps) => {
	return (
		<TouchableOpacity style={styles.buttonWrapper} {...props}>
			<Text style={styles.buttonText}>{label}</Text>
		</TouchableOpacity>
	);
};
