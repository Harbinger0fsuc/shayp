// // Logos slider mobile initialization
import configsCommon from "../../config/config";

const logosSlMob = document.querySelectorAll(".logos-sl-mbl");

if (logosSlMob.length) {
	let logosSwiper;

	function logosSliderMobile(slider, config) {
		if (window.innerWidth < 768 && slider.dataset.mobile === "false") {
			logosSwiper = new Swiper(slider, config);

			slider.dataset.mobile = "true";
		}

		if (window.innerWidth >= 768 && logosSwiper !== undefined) {
			slider.dataset.mobile = "false";

			logosSwiper.destroy();
		}
	}

	Array.from(logosSlMob).forEach((sl) => {
		const prevArrow = sl.parentNode.querySelector(".swiper-button-prev");
		const nextArrow = sl.parentNode.querySelector(".swiper-button-next");
		const pagination = sl.parentNode.querySelector(".swiper-pagination");

		configsCommon.configObjects.logosSlConfig.navigation.prevEl = prevArrow;
		configsCommon.configObjects.logosSlConfig.navigation.nextEl = nextArrow;
		configsCommon.configObjects.logosSlConfig.pagination.el = pagination;

		logosSliderMobile(sl, configsCommon.configObjects.logosSlConfig);

		window.addEventListener("resize", () => {
			logosSliderMobile(sl, configsCommon.configObjects.logosSlConfig);
		});
	});
}
