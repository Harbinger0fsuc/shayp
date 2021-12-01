// Show elements on scroll using AOS.
import AOS from "aos";

const elemsToShow = document.querySelectorAll("[data-aos]");

if (elemsToShow.length > 0) {
	AOS.init({
		once: true,
		duration: 1200,
	});
}
