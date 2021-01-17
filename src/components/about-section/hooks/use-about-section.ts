import { useEffect, useState } from 'react';
import { aboutContentType } from '../type';
import { getAboutContent } from '../../../api/requestServer';

const useAboutSection = () => {
	const [aboutContent, setAboutContent] = useState<aboutContentType[]>();
	useEffect(() => {
		getAboutContent().then((res) => {
			setAboutContent(res.data);
		})
	}, []);

	return {
		aboutContent,
	}
}

export default useAboutSection;
