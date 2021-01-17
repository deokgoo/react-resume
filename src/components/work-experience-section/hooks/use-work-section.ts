import { useEffect, useState } from 'react';
import { getWorkContent } from '../../../api/requestServer';
import { workContentType } from '../type';

const useWorkSection = () => {
	const [workContent, setWorkContent] = useState<workContentType[]>();
	useEffect(() => {
		getWorkContent().then((res) => {
			setWorkContent(res.data);
		});
	}, []);

	return {
		workContent,
	}
}

export default useWorkSection;
