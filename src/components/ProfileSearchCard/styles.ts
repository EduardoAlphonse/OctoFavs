import { StyleSheet } from 'react-native';
import { colors, dimensions, typography } from '../../styles';

export const styles = StyleSheet.create({
	card: {
		flex: 1,
		alignItems: 'center',
		paddingVertical: 20,
		paddingHorizontal: 10,
		borderRadius: dimensions.borderRadius,
		backgroundColor: colors.backgroundLight,
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 100,
		marginBottom: 20,
	},
	star: {
		position: 'absolute',
		top: 10,
		right: 10,
		padding: 4,
		backgroundColor: colors.background,
		borderRadius: 20,
	},
	username: {
		...typography.textSmall,
		color: colors.text,
	},
});
