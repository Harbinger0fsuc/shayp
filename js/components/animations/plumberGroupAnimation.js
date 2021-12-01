// Plumber animation
import { gsap, Elastic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const plumbers = document.querySelectorAll(".js-plumbergroup-animation");

if (plumbers.length > 0) {
	Array.from(plumbers).forEach((plumber) => {
		const arrow = plumber.querySelector(".js-plumbergroup-arrow");

		if (plumber.classList.contains("v-hidden")) {
			gsap.set(plumber, { visibility: "visible" });
		}

		if (arrow) {
			gsap.set(arrow, { transformOrigin: "42% 60%" });
			gsap.to(arrow, { rotate: 360, repeat: -1, repeatDelay: 2.5, duration: 1.4, ease: Elastic.easeOut });
		}
	});
}

// transform-box: fill-box;
// transform-origin: 42% 60%;
// transform: rotate(
// 760deg
// );
