export interface projectType {
	projectName: string;
	duration: string;
	description: string;
	doing: string[];
	techStack: string;
}

export interface workContentType {
	company: string;
	duration: string;
	logo: string;
	projects: projectType[];
}
