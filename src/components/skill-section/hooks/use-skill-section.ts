import { useEffect, useState } from 'react';
import { skillType } from '../type';
import { getSkillContent } from '../../../api/requestServer';
import { useParams } from 'react-router-dom';

const useSkillSection = () => {
	const [skillContent, setSkillContent] = useState<skillType[]>();
	const { lang } = useParams<{ lang: string }>();
	useEffect(() => {
		getSkillContent(lang).then((res) => {
			setSkillContent(res.data);
		})
	}, [lang]);

	return {
		skillContent,
	}
}

export default useSkillSection;
