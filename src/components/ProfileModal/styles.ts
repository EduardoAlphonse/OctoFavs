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
	userDataContainer: {
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	userDataWrapper: {
		position: 'relative',
		width: '100%',
		alignItems: 'center',
	},
	avatarButtonWrapper: {
		width: 110,
		height: 110,
		borderRadius: 110,
		justifyContent: 'center',
		alignItems: 'center',
	},
	avatarButton: {
		width: 106,
		height: 106,
		borderRadius: 106,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.background,
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 100,
		// borderWidth: 4,
		// borderColor: colors.background,
	},
	title: {
		...typography.title,
		color: colors.text,
		marginTop: 20,
		textAlign: 'center',
	},
	starButton: {
		position: 'absolute',
		top: 0,
		right: 0,
	},
	subtitle: {
		...typography.subtitle,
		color: colors.text,
		paddingHorizontal: 20,
	},
});
