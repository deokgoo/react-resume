const scrollSupport = (section: HTMLElement, left: HTMLElement|null, right: HTMLElement|null) => {
	if(!section || !left || !right) return {custom: false, posAbs: false, posFix: false};
	let mq = window.matchMedia('(min-width: 780px)');
	if(mq.matches) {
		const supportPageOffset = window.pageXOffset !== undefined;
		const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
		const scroll = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
		const topContent = section.offsetTop;
		const sectionHeight = right.offsetHeight;
		const leftHeight = left.offsetHeight;
		const bottomContent = topContent + sectionHeight - leftHeight;

		if (scroll > topContent && scroll < bottomContent) {
			return {custom: true, posAbs: false, posFix: true};
		} else if (scroll > bottomContent) {
			return {custom: true, posAbs: true, posFix: false};
		} else if (scroll < topContent) {
			return {custom: true, posAbs: false, posFix: false};
		}
	} else {
		return {custom: false, posAbs: false, posFix: false};
	}
}

export default scrollSupport;
