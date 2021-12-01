// Draw tree, show elems and move leaves
import { gsap, Quad } from "gsap";

const fountains = document.querySelectorAll(".js-fountain-animation");

if (fountains.length > 0) {
	Array.from(fountains).forEach((fountain) => {
		const bubbles = fountain.querySelectorAll(".js-fountain-bubble");

		if (bubbles.length > 0) {
			gsap.set(bubbles, { transformOrigin: "center" });
			gsap.fromTo(bubbles,
				{ scale: 0.5, fill: "#e8f4f8" },
				{ scale: 1, fill: "#80E7FF", duration: 1.5, repeat: -1, yoyo: true, stagger: { each: 0.2 } },
			);
		}
	});
}
