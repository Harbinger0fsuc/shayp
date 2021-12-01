// Appearing and disappearing lines
import { gsap } from "gsap";

const grass = document.querySelectorAll(".js-grass-animation");

if (grass.length > 0) {
	const grassTimelineMaster = gsap.timeline({ repeat: -1, yoyo: true, paused: true });
	const time = 2;
	const d = 0.2;

	gsap.set(grass, { transformOrigin: "center bottom" });

	Array.from(grass).forEach((el, index) => {
		const grassTimelineMinor = gsap.timeline();
		grassTimelineMinor.to(el, { rotate: 12, duration: time, ease: "none" }, 0);
		grassTimelineMaster.add(grassTimelineMinor, (index) * d);
	});

	grassTimelineMaster.play();
}
