//
// ------------------------- Main configuration object
//
const configCommon = {
	// Different config objects
	configObjects: {
		// Swiper config as to logos slider
		logosSlConfig: {
			slidesPerView: 1,
			spaceBetween: 0,
			navigation: {
				prevEl: "",
				nextEl: "",
			},
			pagination: {
				clickable: true,
				el: "",
			},
			breakpoints: {
				370: {
					slidesPerView: 2,
					spaceBetween: 24,
				},
				600: {
					slidesPerView: 3,
					spaceBetween: 24,
				},
			},
		},

		// Swiper config as to testimonials slider
		sliderTestimonialsConfig: {
			pagination: {
				clickable: true,
				el: "",
			},
			slidesPerView: 1,
			spaceBetween: 50,
			effect: "",
			loop: true,
			fadeEffect: {
				crossFade: false,
			},
		},

		// Swiper config as to common slider
		sliderCommonConfig: {
			slidesPerView: 1,
			loop: true,
			spaceBetween: 30,
			pagination: {
				clickable: true,
				el: "",
			},
			breakpoints: {
				640: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
			},
		},
	},

	// Common text that is present in several places and may be changed going forward.
	contentCommon: {
		// Translations
		translations: {
			translationEn: {
				readMore: "Read more",
				readLess: "Read less",
			},
		},
	},

	// General classes
	classesCommon: {
		classActive: "is-active",
		classOpen: "is-open",
		classHidden: "is-hidden",
		classVisible: "is-visible",
		classReversed: "is-reversed",
	},
};

export default configCommon;
