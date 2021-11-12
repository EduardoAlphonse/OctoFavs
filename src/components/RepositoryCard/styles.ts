import { StyleSheet } from 'react-native';
import { colors, fonts, typography } from '../../styles';

export const styles = StyleSheet.create({
	container: {
		padding: 20,
		borderRadius: 20,
		backgroundColor: colors.backgroundLight,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		marginBottom: 20,
	},
	repositoryName: {
		flex: 1,
		...typography.buttonText,
		color: colors.textLight,
		marginRight: 20,
	},
	languageWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		top: 2,
	},
	dot: {
		width: 6,
		height: 6,
		borderRadius: 6,
		marginRight: 6,
	},
	language: {
		...typography.textSmall,
	},
	lastUpdate: {
		...typography.textSmall,
		color: colors.text,
	},
	data: {
		fontFamily: fonts.medium,
		fontSize: 12,
	},
});
