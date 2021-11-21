import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';

import { RootStackParamList } from '../../navigation';
import { Button } from '../../components/Button';
import { setConfig } from '../../services/storage';
import { getConfig } from '../../services/storage';

import { colors } from '../../styles';
import { styles } from './styles';

type OnboardingNavigationProps = NativeStackNavigationProp<
	RootStackParamList,
	'Onboarding'
>;

export const Onboarding = () => {
	const navigation = useNavigation<OnboardingNavigationProps>();

	const handleContinue = () => {
		setConfig();
		navigation.navigate('HomeStack');
	};

	useEffect(() => {
		(async () => {
			const config = await getConfig();

			if (config.openOnce) {
				navigation.navigate('HomeStack');
			}
		})();
	}, []);

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

			<View style={styles.continueButtonWrapper}>
				<Button onPress={handleContinue} activeOpacity={0.5}>
					<Text style={styles.buttonText}>Continuar</Text>
					<Feather name="arrow-right" size={20} color={colors.white} />
				</Button>
			</View>
		</View>
	);
};
