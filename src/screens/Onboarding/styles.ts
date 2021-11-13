import { StyleSheet } from 'react-native';
import { colors, typography } from '../../styles';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	welcome: {
		flex: 1,
		justifyContent: 'flex-end',
		paddingHorizontal: 40,
	},
	welcomeTitle: {
		...typography.title,
		color: colors.textLight,
		marginBottom: 40,
		textAlign: 'center',
	},
	welcomeText: {
		...typography.text,
		color: colors.text,
		textAlign: 'center',
	},
	continueButtonWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		...typography.buttonText,
		color: colors.white,
		marginRight: 10,
		top: 1,
	},
});
