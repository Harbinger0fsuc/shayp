// Tower animation
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const towers = document.querySelectorAll(".js-tower-animation");

if (towers.length > 0) {
	Array.from(towers).forEach((tower) => {
		const towersElems = tower.querySelectorAll(".js-tower-el");
		const towerTimeline = gsap.timeline();

		if (tower.classList.contains("v-hidden")) {
			gsap.set(tower, { visibility: "visible" });
		}

		if (towersElems.length > 0) {
			gsap.set(towersElems, { transformOrigin: "center bottom" });

			Array.from(towersElems).forEach((el) => {
				towerTimeline.fromTo(el, { scaleY: 0 }, { scaleY: 1, duration: 0.7 });
			});
		}

		ScrollTrigger.create({
			animation: towerTimeline,
			trigger: tower,
			toggleActions: "play pause resume pause",
		});
	});
}
