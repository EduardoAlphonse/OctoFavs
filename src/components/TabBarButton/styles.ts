import { StyleSheet } from 'react-native';
import { typography } from '../../styles';

export const styles = StyleSheet.create({
	buttonWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderColor: '#f00',
	},
	buttonText: {
		...typography.textSmall,
	},
});
