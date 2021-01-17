import { useHistory } from "react-router-dom";

const useLanding = () => {
	const history = useHistory();
	const historyPush = (lang: string) => {
		console.log(lang);
		history.push(`/${lang}`);
	}
	return {
		historyPush,
	}
}

export default useLanding;
