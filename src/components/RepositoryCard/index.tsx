import React from 'react';
import { View, Text } from 'react-native';
import { languageColors } from '../../utils/languageColors';

import { formatDate } from '../../utils/formatDate';

import { colors } from '../../styles';
import { styles } from './styles';

export type Repository = {
	id: number;
	name: string;
	html_url: string;
	description: string;
	language: string | null;
	stargazers_count: number;
	updated_at: string;
};

type RepositoryCardProps = {
	data: Repository;
};

export const RepositoryCard = ({ data }: RepositoryCardProps) => {
	let languageLabelColor = colors.text;

	if (data.language) {
		if (languageColors.hasOwnProperty(data.language)) {
			languageLabelColor = languageColors[data.language].color ?? colors.text;
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.repositoryName}>{data.name}</Text>
				{data.language && (
					<View style={styles.languageWrapper}>
						<View
							style={[styles.dot, { backgroundColor: languageLabelColor }]}
						/>
						<Text style={[styles.language]}>
							<Text
								style={[
									styles.language,
									{ color: languageLabelColor ?? colors.text },
								]}
							>
								{data.language}
							</Text>
						</Text>
					</View>
				)}
			</View>

			<Text style={styles.lastUpdate}>
				Última atualização:{' '}
				<Text style={styles.data}>{formatDate(data.updated_at)}</Text>
			</Text>
		</View>
	);
};
