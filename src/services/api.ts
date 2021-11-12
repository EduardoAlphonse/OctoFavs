import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://api.github.com/',
	headers: {
		accept: 'application/vnd.github.v3+json',
	},
});
