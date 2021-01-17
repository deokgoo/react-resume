import { useEffect, useState } from 'react';
import { skillType } from '../type';
import { getSkillContent } from '../../../api/requestServer';

const useSkillSection = () => {
	const [skillContent, setSkillContent] = useState<skillType[]>();
	useEffect(() => {
		getSkillContent().then((res) => {
			setSkillContent(res.data);
		})
	}, []);

	return {
		skillContent,
	}
}

export default useSkillSection;
