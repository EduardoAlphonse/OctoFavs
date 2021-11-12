import { StyleSheet } from 'react-native';
import { colors, dimensions, typography } from '../../styles';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.backgroundLight,
		borderColor: 'transparent',
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
		backgroundColor: colors.background,
		borderBottomRightRadius: 20,
		borderBottomLeftRadius: 20,
	},
	userListWrapper: {
		flex: 1,
		borderRadius: 20,
		overflow: 'hidden',
	},
	emptyListMessageWrapper: {
		alignItems: 'center',
	},
	emptyListMessage: {
		...typography.textBig,
		color: colors.text,
		textAlign: 'center',
		paddingHorizontal: 20,
		marginBottom: 40,
	},
	buttonText: {
		...typography.buttonText,
		color: colors.white,
	},
});
