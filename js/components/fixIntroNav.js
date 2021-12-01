// Fix intro nav on single post page
import getTopOffsetScrolling from "../functions/getTopOffsetScrolling";
import getElementHeight from "../functions/getElementHeight";

const header = document.querySelector(".header");
const introSingle = document.querySelector(".intro-single");
const introNav = document.querySelector(".js-intr-nav-fixed");

if (introNav && introSingle) {
	const headerHeight = getElementHeight(header);
	const introNavHeight = getElementHeight(introNav);
	const introSingleHeight = getElementHeight(introSingle);
	const offset = 200;


	window.addEventListener("scroll", function() {

		if(getTopOffsetScrolling() > offset) {
			introSingle.style.height = introSingleHeight + "px";
			introNav.classList.add("is-fixed");
			introNav.style.top = `${headerHeight}px`;
		} else {
			introNav.classList.remove("is-fixed");
		}
	});
}
