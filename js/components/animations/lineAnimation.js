// Appearing and disappearing lines
import { gsap } from "gsap";

const lines = document.querySelectorAll(".js-line-animation");

if (lines.length > 0) {
	const linesTimeline = gsap.timeline({ repeat: -1 });

	gsap.set(lines, { autoAlpha: 0 });

	Array.from(lines).forEach((line) => {
		linesTimeline.to(line, { autoAlpha: 1, duration: 0.2, yoyo: true });
	});
}
