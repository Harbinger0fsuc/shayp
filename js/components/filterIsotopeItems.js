// Filter isotope items
import configCommon from "../config/config";

const gridFilter = document.querySelectorAll(".grid-filter");
const filterBtns = document.querySelectorAll(".filter-button");
// const accordionHeaders = document.querySelectorAll(".accordion__header");

if (gridFilter.length > 0) {
	Array.from(gridFilter).forEach((grid) => {
		const isotopeInitialization = new Isotope(grid, {
			itemSelector: ".grid-filter__item",
		});

		Array.from(filterBtns).forEach((btn) => {
			btn.addEventListener("click", () => {
				const pillsList = btn.closest(".pills-list");
				const pillsBtns = pillsList.querySelectorAll(".pills-list__pill");

				Array.from(pillsBtns).forEach((pillBtn) => {
					pillBtn.classList.remove(configCommon.classesCommon.classActive);
				});

				btn.classList.add(configCommon.classesCommon.classActive);

				const filterValue = btn.getAttribute("data-filter");
				isotopeInitialization.arrange({ filter: filterValue });
			});
		});
	});
}
