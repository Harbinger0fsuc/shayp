// Laptop animation
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const railways = document.querySelectorAll(".js-railway-animation");

if (railways.length > 0) {
	Array.from(railways).forEach((railway) => {
		// const buildingComponents = building.querySelectorAll(".js-building-el");
		const building = railway.querySelector(".js-railway-building");
		const track = railway.querySelector(".js-railway-track");
		const trees = railway.querySelectorAll(".js-railway-tree");
		const train = railway.querySelector(".js-railway-train");
		const railwayTimeline = gsap.timeline();

		if (railway.classList.contains("v-hidden")) {
			gsap.set(railway, { visibility: "visible" });
		}

		if (building) {
			gsap.set(building, { transformOrigin: "center bottom" });
			railwayTimeline.fromTo(building, { scaleY: 0, autoAlpha: 0 }, { scaleY: 1, autoAlpha: 1, duration: 0.6 });
		}

		if (track) {
			gsap.set(track, { transformOrigin: "center bottom" });
			railwayTimeline.fromTo(track, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.7 });
		}

		if (trees.length > 0) {
			gsap.set(trees, { transformOrigin: "center bottom" });
			railwayTimeline.fromTo(trees, { scaleY: 0, autoAlpha: 0 }, { scaleY: 1, autoAlpha: 1, duration: 0.5, stagger: { each: 0.3 } });
		}

		if (train) {
			railwayTimeline.from(train, { x: -152, y: -44, autoAlpha: 0, duration: 1 });
		}

		ScrollTrigger.create({
			animation: railwayTimeline,
			trigger: railway,
			toggleActions: "play pause resume pause",
		});
	});
}
