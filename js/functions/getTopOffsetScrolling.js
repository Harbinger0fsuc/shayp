function getTopOffsetScrolling(el = window) {
	return el === window ? el.pageYOffset ?? document.documentElement.scrollTop : el.pageYOffset;
}

export default getTopOffsetScrolling;
