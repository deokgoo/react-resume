import { useEffect, useState } from 'react';
import { aboutContentType } from '../type';
import { getAboutContent } from '../../../api/requestServer';
import { useParams } from 'react-router-dom';

const useAboutSection = () => {
	const [aboutContent, setAboutContent] = useState<aboutContentType[]>();
	const { lang } = useParams<{ lang: string }>();
	useEffect(() => {
		getAboutContent(lang).then((res) => {
			setAboutContent(res.data);
		})
	}, [lang]);

	return {
		aboutContent,
	}
}

export default useAboutSection;
