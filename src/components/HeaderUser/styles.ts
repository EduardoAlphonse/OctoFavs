import { StyleSheet, StatusBar } from 'react-native';
import { colors, typography } from '../../styles';

export const styles = StyleSheet.create({
	headerWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		backgroundColor: colors.backgroundLight,
		paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 40,
		paddingHorizontal: 20,
		paddingBottom: 20,
	},
	username: {
		...typography.buttonText,
		color: colors.textLight,
	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 200,
		resizeMode: 'contain',
	},
});
