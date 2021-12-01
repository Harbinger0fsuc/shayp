// Laptop animation
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const buildings = document.querySelectorAll(".js-showbuildings-animation");

if (buildings.length > 0) {
	Array.from(buildings).forEach((building) => {
		const buildingComponents = building.querySelectorAll(".js-building-el");
		const buildingTimeline = gsap.timeline();

		if (building.classList.contains("v-hidden")) {
			gsap.set(building, { visibility: "visible" });
		}

		if (buildingComponents.length > 0) {
			gsap.set(buildingComponents, { scaleY: 0, autoAlpha: 0, transformOrigin: "center bottom" });

			buildingTimeline.to(buildingComponents, { scaleY: 1, autoAlpha: 1, duration: 0.6, stagger: { each: 0.5 } });
		}

		ScrollTrigger.create({
			animation: buildingTimeline,
			trigger: building,
			toggleActions: "play pause resume pause",
		});
	});
}
