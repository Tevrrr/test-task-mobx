import axios from 'axios';

export const api_url = import.meta.env.API_URL || 'https://api.github.com/';

export const $api = axios.create({
	baseURL: api_url,
});
