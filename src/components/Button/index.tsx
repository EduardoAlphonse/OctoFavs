import React, { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { colors } from '../../styles';
import { styles } from './styles';

type ButtonProps = TouchableOpacityProps & {
	children: ReactNode;
	backgroundColor?: string;
};

export const Button = ({
	children,
	backgroundColor,
	...props
}: ButtonProps) => {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				{ backgroundColor: backgroundColor ?? colors.primary },
			]}
			{...props}
		>
			{children}
		</TouchableOpacity>
	);
};
