// Expand mobile submenu when clicking on mobile navigation link
import configCommon from "../../config/config";
import expandElement from "../../functions/expandElement";

const mobNavLinks = document.querySelectorAll(".mobile-nav__link");

if (mobNavLinks.length > 0) {
	Array.from(mobNavLinks).forEach((link) => {
		link.addEventListener("click", function() {
			const mobNavItem = this.parentNode;

			if (mobNavItem.classList.contains("mobile-nav__item--has-submenu")) {
				const submenu = mobNavItem.querySelector(".mobile-nav-submenu");

				mobNavItem.classList.toggle(configCommon.classesCommon.classActive);

				expandElement(submenu, submenu.parentNode, true, configCommon.classesCommon.classActive);
			}
		});
	});
}
