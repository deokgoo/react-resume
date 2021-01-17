import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getLandingContent } from '../../../api/requestServer';
import { landingType } from '../type';

const useLanding = () => {
	const history = useHistory();
	const { lang } = useParams<{ lang: string }>();
	const [landingContent, setLandingContent] = useState<landingType>();

	const historyPush = (lang: string) => {
		history.push(`/${lang}`);
	}
	useEffect(() => {
		getLandingContent(lang).then((res) => {
			setLandingContent(res.data);
		})
	}, [lang]);
	return {
		landingContent,
		historyPush,
	}
}

export default useLanding;
