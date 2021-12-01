// Accordion
import configCommon from "../config/config";
import expandElement from "../functions/expandElement";

const accordionHeaders = document.querySelectorAll(".accordion__header");

if (accordionHeaders.length) {
	Array.from(accordionHeaders).forEach((accordionHeader) => {
		accordionHeader.addEventListener("click", function (e) {
			e.preventDefault();

			const accordionContent = this.nextElementSibling;
			const accordionWrapper = this.parentElement;

			expandElement(accordionContent, accordionWrapper, true, configCommon.classesCommon.classActive);
		});
	});
}
