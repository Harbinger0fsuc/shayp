// Radio tower animation
import { gsap } from "gsap";

const towers = document.querySelectorAll(".js-radiotower-animation");

if (towers.length > 0) {
	Array.from(towers).forEach((tower) => {
		const towerTimeline = gsap.timeline();

		towerTimeline.to(tower, { autoAlpha: 1, scale: 1.1, duration: 2, repeat: -1 });
	});
}
