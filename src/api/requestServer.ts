import axios from 'axios';

const baseURL = process.env.REACT_APP_API_SERVER;

export const getAboutContent = () => {
	return axios.get(`${baseURL}/content/about`);
}

export const getSkillContent = () => {
	return axios.get(`${baseURL}/content/skill`);
}

export const getWorkContent = () => {
	return axios.get(`${baseURL}/content/work`);
}
