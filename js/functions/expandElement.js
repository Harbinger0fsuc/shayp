// Expand or collapse element on click, for one.
function expandElement(el, elWrapper = "", toggleClass = false, activeClass = "") {
	if (el.style.maxHeight) {
		el.style.maxHeight = null;

		if (toggleClass) {
			elWrapper.classList.remove(activeClass);
		}
	} else {
		el.style.maxHeight = `${el.scrollHeight}px`;

		if (toggleClass) {
			elWrapper.classList.add(activeClass);
		}
	}
}

export default expandElement;
