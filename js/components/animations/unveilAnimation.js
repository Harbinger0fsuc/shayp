// Laptop animation
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const elemsToUnveil = document.querySelectorAll(".js-unveil-animation");

if (elemsToUnveil.length > 0) {
	Array.from(elemsToUnveil).forEach((elemToUnveil) => {
		const unveilComponents = elemToUnveil.querySelectorAll(".js-unveil-el");
		const unveilTimeline = gsap.timeline();

		if (elemToUnveil.classList.contains("v-hidden")) {
			gsap.set(elemToUnveil, { visibility: "visible" });
		}

		if (unveilComponents.length > 0) {
			gsap.set(unveilComponents, { autoAlpha: 0 });

			unveilTimeline.to(unveilComponents, { autoAlpha: 1, duration: 0.6, stagger: { each: 0.6 } });
		}

		ScrollTrigger.create({
			animation: unveilTimeline,
			trigger: elemToUnveil,
			toggleActions: "play pause resume pause",
		});
	});
}
