// Heart animation
import { gsap, Elastic } from "gsap";

const hearts = document.querySelectorAll(".js-heart-animation");

if (hearts.length > 0) {
	Array.from(hearts).forEach((heart) => {
		const towerTimeline = gsap.timeline();

		gsap.set(heart, { transformOrigin: "50% 50%" });

		towerTimeline.to(heart, {
			scaleX: 1.3, scaleY: 1.4, ease: Elastic.easeOut, repeat: -1, repeatDelay: 1, duration: 1,
		});
	});
}
