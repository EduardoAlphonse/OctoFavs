import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';

import { RootStackParamList } from '../../navigation';
import { Button } from '../../components/Button';

import { colors } from '../../styles';
import { styles } from './styles';

type LoginNavigationProps = NativeStackNavigationProp<
	RootStackParamList,
	'Login'
>;

export const Login = () => {
	const navigation = useNavigation<LoginNavigationProps>();

	const handleLogin = () => {
		navigation.navigate('HomeStack');
	};

	return (
		<View style={styles.container}>
			<View style={styles.welcome}>
				<Text style={styles.welcomeTitle}>
					Bem vindo(a) ao{' '}
					<Text style={{ color: colors.primary }}>OctoFavs!</Text>
				</Text>

				<Text style={styles.welcomeText}>
					Procure seus desenvolvedores favoritos no GitHub, e salve na sua lista
					para ter acesso rápido à seus perfis.
				</Text>
			</View>

			<View style={styles.loginButtonWrapper}>
				<Button onPress={handleLogin} activeOpacity={0.5}>
					<AntDesign name="github" size={20} color={colors.white} />
					<Text style={styles.buttonText}>Entrar</Text>
				</Button>
			</View>
		</View>
	);
};
