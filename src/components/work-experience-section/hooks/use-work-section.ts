import { useEffect, useState } from 'react';
import { getWorkContent } from '../../../api/requestServer';
import { workContentType } from '../type';
import { useParams } from 'react-router-dom';

const useWorkSection = () => {
	const [workContent, setWorkContent] = useState<workContentType[]>();
	const { lang } = useParams<{ lang: string }>();
	useEffect(() => {
		getWorkContent(lang).then((res) => {
			setWorkContent(res.data);
		});
	}, [lang]);

	return {
		workContent,
	}
}

export default useWorkSection;
