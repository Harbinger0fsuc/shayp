// Slider previews initialization
import configCommon from "../../config/config";
import initSwiper from "../../functions/initSwiper";

const sliderCommon = document.querySelectorAll(".slider-common");

if (sliderCommon.length > 0) {
	Array.from(sliderCommon).forEach((slider) => {
		const pagination = slider.querySelector(".swiper-pagination");
		configCommon.configObjects.sliderCommonConfig.pagination.el = pagination;

		initSwiper(slider, configCommon.configObjects.sliderCommonConfig);
	});
}
