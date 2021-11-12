import { StyleSheet } from 'react-native';
import { colors, dimensions, typography } from '../../styles';

export const styles = StyleSheet.create({
	rootStyle: {
		backgroundColor: colors.backgroundLight,
	},
	modalStyle: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: colors.background,
	},
	headerContainer: {
		borderTopLeftRadius: dimensions.borderRadius,
		borderTopRightRadius: dimensions.borderRadius,
		overflow: 'hidden',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 20,
		backgroundColor: colors.backgroundLight,
	},
	username: {
		...typography.buttonText,
		color: colors.textLight,
		textAlign: 'center',
	},
	userContainer: {
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 100,
	},
	title: {
		...typography.title,
		color: colors.text,
		marginTop: 20,
		textAlign: 'center',
	},
	subtitle: {
		...typography.subtitle,
		color: colors.text,
		paddingHorizontal: 20,
	},
});
