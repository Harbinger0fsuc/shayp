// Toggle back to top button visibility
import configCommon from "../../config/config";
import getElementHeight from "../../functions/getElementHeight";
import getTopOffsetScrolling from "../../functions/getTopOffsetScrolling";

const backToTop = document.querySelector(".back-to-top");
const introSingle = document.querySelector(".intro-single");
const singlePost = document.querySelector(".single-post");
const footer = document.querySelector(".footer");
const featuredImages = document.querySelector(".single-post-featured");

if (backToTop) {
	let offsetTop;
	let offsetBottom;

	if (introSingle && featuredImages) {
		const introSingleHeight = getElementHeight(introSingle);
		const featuredImagesHeight = getElementHeight(featuredImages);

		offsetTop = (introSingleHeight + featuredImagesHeight) / 2;
	} else {
		offsetTop = 500;
	}

	if (singlePost && footer) {
		const singlePostPb = parseInt(window.getComputedStyle(singlePost).paddingBottom);
		const footerHeight = getElementHeight(footer);
		const footerOffset = footer.offsetTop;

		offsetBottom = footerOffset - ((singlePostPb + footerHeight) * 1.5);
	} else {
		offsetBottom = 1200;
	}

	window.addEventListener("scroll", function() {
		const scrollPosition = getTopOffsetScrolling(window);

		if (scrollPosition > offsetTop && scrollPosition < offsetBottom) {
			backToTop.classList.add(configCommon.classesCommon.classVisible);
		} else {
			backToTop.classList.remove(configCommon.classesCommon.classVisible);
		}
	});

	if (getTopOffsetScrolling(window) > offsetTop) {
		backToTop.classList.add(configCommon.classesCommon.classVisible);
	}
}
