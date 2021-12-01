// Laptop animation
import { gsap } from "gsap";

const crosses = document.querySelectorAll(".js-pulsatingcross-animation");

if (crosses.length > 0) {
	Array.from(crosses).forEach((cross) => {
		gsap.set(cross, { transformOrigin: "center center" });

		gsap.to(cross, { scale: 1.7, repeat: -1, yoyo: true, duration: 2 });
	});
}
