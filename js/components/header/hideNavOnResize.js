// Hide mobile navigation on resize
import configCommon from "../../config/config";

const menuMobile = document.querySelector(".menu-mobile");
const navTogglerBtn = document.querySelector(".js-tgl-nav");

if (menuMobile) {
	window.addEventListener("resize", function() {
		if (this.innerWidth > 1024) {
			navTogglerBtn.classList.remove(configCommon.classesCommon.classActive);
			menuMobile.classList.remove(configCommon.classesCommon.classOpen);
		}
	});
}
