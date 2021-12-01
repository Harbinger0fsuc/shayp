// Change header on scroll
import configCommon from "../../config/config";
import getTopOffsetScrolling from "../../functions/getTopOffsetScrolling";

const header = document.querySelector(".js-hdr-reversed");

if (header) {
	const offsetTop = 20;

	window.addEventListener("scroll", function(e) {
		let pageTopOffset = getTopOffsetScrolling(window);

		if (pageTopOffset > offsetTop) {
			header.classList.add(configCommon.classesCommon.classReversed);
		} else {
			header.classList.remove(configCommon.classesCommon.classReversed);
		}
	});

	if (getTopOffsetScrolling(window) > 0) {
		header.classList.add(configCommon.classesCommon.classReversed);
	}
}
