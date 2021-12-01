// Draw tree, show elems and move leaves
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import preparePath from "../../functions/preparePath";

gsap.registerPlugin(ScrollTrigger);

const techcities = document.querySelectorAll(".js-techcity-animation");

if (techcities.length > 0) {
	Array.from(techcities).forEach((city) => {
		const elemsToBlick = city.querySelectorAll(".js-techcity-blick");
		const roads = city.querySelectorAll(".js-techcity-road");
		const triangles = city.querySelectorAll(".js-techcity-triangle");
		const notification = city.querySelector(".js-techcity-notification");
		const techcityTimeline = gsap.timeline();

		if (city.classList.contains("v-hidden")) {
			gsap.set(city, { visibility: "visible" });
		}

		if (elemsToBlick.length > 0) {
			gsap.set(elemsToBlick, { transformOrigin: "center center" });
			Array.from(elemsToBlick).forEach((blick) => {
				gsap.fromTo(blick, { yPercent: -50, autoAlpha: 1 }, { yPercent: 50, autoAlpha: 0, repeat: -1, repeatDelay: 3, duration: 0.6 });
			});
		}

		if (roads.length > 0) {
			const roadTimeline = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 2 });
			Array.from(roads).forEach((road) => {

				preparePath(road);

				roadTimeline.to(road, { strokeDashoffset: 0, ease: "none", duration: 0.9 });
				techcityTimeline.add(roadTimeline, 0.1);
			});
		}

		if (triangles.length > 0) {
			gsap.set(triangles, { transformOrigin: "center bottom" });
			techcityTimeline.fromTo(triangles, { autoAlpha: 0, scaleY: 0 }, { autoAlpha: 1, scaleY: 1, duration: 0.5, stagger: { each: 0.2 } });
		}

		if (notification) {
			techcityTimeline.fromTo(notification, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 });
		}

		ScrollTrigger.create({
			animation: techcityTimeline,
			trigger: city,
			toggleActions: "play pause resume pause",
		});
	});
}
