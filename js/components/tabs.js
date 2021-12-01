// Tabs component
import configCommon from "../config/config";

const tabBtns = document.querySelectorAll(".tabs-nav__button");

if (tabBtns.length > 0) {
	Array.from(tabBtns).forEach((btn) => {
		btn.addEventListener("click", function(e) {
			e.preventDefault();

			const elToShow = this.getAttribute("data-event-type");
			const tabs = this.closest(".tabs");
			const allBtns = tabs.querySelectorAll(".tabs-nav__button");
			const allPanes = tabs.querySelectorAll(".tabs__pane");

			Array.from(allBtns).forEach((button) => {
				button.classList.remove(configCommon.classesCommon.classActive);
			});

			Array.from(allPanes).forEach((pane) => {
				pane.classList.remove(configCommon.classesCommon.classActive);
			});

			if (this.classList.contains("pills-list__pill")) {
				this.classList.add(configCommon.classesCommon.classActive);
			}

			this.classList.add(configCommon.classesCommon.classActive);
			document.getElementById(elToShow).classList.add(configCommon.classesCommon.classActive);
		});
	});
}
