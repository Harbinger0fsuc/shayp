// Plumber animation
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const plumbers = document.querySelectorAll(".js-plumber-animation");

if (plumbers.length > 0) {
	Array.from(plumbers).forEach((plumber) => {
		const hatch = plumber.querySelector(".js-plumber-hatch");
		const man = plumber.querySelector(".js-plumber-man");
		const wrench = plumber.querySelector(".js-plumber-wrench");
		const plumberTimeline = gsap.timeline();

		if (plumber.classList.contains("v-hidden")) {
			gsap.set(plumber, { visibility: "visible" });
		}

		if (hatch) {
			gsap.set(hatch, { transformOrigin: "50% 50%" });

			plumberTimeline.from(hatch, {
				translateX: 120, translateY: -27, translateZ: 170, rotate: 10, duration: 0.6,
			});
		}

		if (man) {
			plumberTimeline.fromTo(man,
				{ autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 });
		}

		if (wrench) {
			plumberTimeline.from(wrench, {
				autoAlpha: 0, translateX: 42, translateY: -1, duration: 0.6,
			});
		}

		ScrollTrigger.create({
			animation: plumberTimeline,
			trigger: plumber,
			toggleActions: "play pause resume pause",
		});
	});
}
