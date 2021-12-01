// Slider previews initialization
import configCommon from "../../config/config";

const sliderTestimonials = document.querySelectorAll(".slider-testimonials");

if (sliderTestimonials.length > 0) {
	Array.from(sliderTestimonials).forEach((slider) => {
		const pagination = slider.querySelector(".swiper-pagination");
		configCommon.configObjects.sliderTestimonialsConfig.pagination.el = pagination;

		if (slider.classList.contains("slider-testimonials--faded")) {
			configCommon.configObjects.sliderTestimonialsConfig.effect = "fade";
			configCommon.configObjects.sliderTestimonialsConfig.fadeEffect.crossFade = true;
		}

		const sliderInitialization = new Swiper(slider, configCommon.configObjects.sliderTestimonialsConfig);


		if (slider.classList.contains("slider-testimonials--video")) {
			sliderInitialization.on("slideChange", function() {
				const ytPlayers = slider.querySelectorAll(".yt-player");
				const videoInfo = slider.querySelectorAll(".block-video-info");

				if (ytPlayers.length > 0) {
					Array.from(ytPlayers).forEach(() => {
						allPlayers[sliderInitialization.previousIndex].pauseVideo();
					});
				}

				if (videoInfo.length > 0) {
					Array.from(videoInfo).forEach((infoBlock) => {
						infoBlock.classList.remove(configCommon.classesCommon.classHidden);
					});
				}
			});
		}
	});
}
