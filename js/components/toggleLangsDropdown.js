// Toggle language dropdown
import configCommon from "../config/config";

const langsDropdownToggler = document.querySelectorAll(".dropdown-languages__toggler");

if (langsDropdownToggler.length > 0) {
	Array.from(langsDropdownToggler).forEach((toggler) => {
		const parent = toggler.parentNode;

		toggler.addEventListener("click", function() {
			parent.classList.toggle(configCommon.classesCommon.classActive);
		});

		document.addEventListener("click", function(e) {
			if (e.target.closest(".dropdown-languages")) return;

			parent.classList.remove(configCommon.classesCommon.classActive);
		});
	});
};
