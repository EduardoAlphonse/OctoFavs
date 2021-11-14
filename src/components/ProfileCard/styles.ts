import { StyleSheet } from 'react-native';
import { colors, dimensions, typography } from '../../styles';

export const styles = StyleSheet.create({
	card: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: dimensions.borderRadius,
		padding: 20,
		backgroundColor: colors.backgroundLight,
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 100,
		marginRight: 20,
	},
	data: {
		flex: 1,
	},
	nameWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	name: {
		flex: 1,
		...typography.text,
		color: colors.text,
		marginRight: 20,
	},
	username: {
		...typography.textSmallest,
		color: colors.accent,
	},
	lastUpdate: {
		...typography.textSmallest,
		color: colors.text,
	},
});
