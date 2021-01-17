import axios from 'axios';

const baseURL = process.env.REACT_APP_API_SERVER;

export const getAboutContent = (lang: string) => {
	const languageUrl = lang?`${baseURL}/${lang}`:baseURL;
	return axios.get(`${languageUrl}/content/about`);
}

export const getSkillContent = (lang: string) => {
	const languageUrl = lang?`${baseURL}/${lang}`:baseURL;
	return axios.get(`${languageUrl}/content/skill`);
}

export const getWorkContent = (lang: string) => {
	const languageUrl = lang?`${baseURL}/${lang}`:baseURL;
	return axios.get(`${languageUrl}/content/work`);
}
