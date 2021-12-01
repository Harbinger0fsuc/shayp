// Toggle mobile navigation
import configCommon from "../../config/config";

const navTogglerBtn = document.querySelector(".js-tgl-nav");
const menuMobile = document.querySelector(".menu-mobile");

if (navTogglerBtn) {
	navTogglerBtn.addEventListener("click", function () {
		this.classList.toggle(configCommon.classesCommon.classActive);
		menuMobile.classList.toggle(configCommon.classesCommon.classOpen);
	});
}
