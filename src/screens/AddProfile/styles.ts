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
		paddingTop: 20,
		paddingHorizontal: 20,
		backgroundColor: colors.background,
	},
	userListWrapper: {
		flex: 1,
		borderRadius: 20,
		overflow: 'hidden',
	},
	emptyListMessageWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	emptyListMessage: {
		...typography.textBig,
		color: colors.text,
		textAlign: 'center',
		paddingHorizontal: 20,
	},
	inputWrapper: {
		padding: 20,
		borderBottomRightRadius: 20,
		borderBottomLeftRadius: 20,
		backgroundColor: colors.background,
	},
	input: {
		backgroundColor: colors.backgroundLight,
		borderRadius: 40,
		paddingVertical: 10,
		paddingLeft: 20,
		paddingRight: 60,
		...typography.text,
		color: colors.text,
	},
	searchIcon: {
		position: 'absolute',
		top: 32,
		right: 40,
	},
});
