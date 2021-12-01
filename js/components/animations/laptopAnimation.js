// Laptop animation
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const laptops = document.querySelectorAll(".js-laptop-animation");

if (laptops.length > 0) {
	Array.from(laptops).forEach((laptop) => {
		const laptopTimeline = gsap.timeline();
		const foundation = laptop.querySelector(".js-laptop-foundation");
		const body = laptop.querySelector(".js-laptop-body");
		const triangle = laptop.querySelector(".js-laptop-triangle");
		const droplet = laptop.querySelector(".js-laptop-droplet");

		if (laptop.classList.contains("v-hidden")) {
			gsap.set(laptop, { visibility: "visible" });
		}

		if (foundation) {
			laptopTimeline.fromTo(foundation, { autoAlpha: 0, translateY: -40 }, { autoAlpha: 1, translateY: 0, duration: 0.7 });
		}

		if (body) {
			laptopTimeline.fromTo(body, { autoAlpha: 0, translateY: -40 }, { autoAlpha: 1, translateY: 0, duration: 0.7 });
		}

		if (triangle) {
			laptopTimeline.fromTo(triangle, { autoAlpha: 0, translateY: -10 }, { autoAlpha: 1, translateY: 0, duration: 0.3 });
		}

		if (droplet) {
			laptopTimeline.fromTo(droplet, { autoAlpha: 0, translateY: -15 }, { autoAlpha: 1, translateY: 0, duration: 2, yoyo:true, repeat: -1, repeatDelay: 1.5 });
		}

		ScrollTrigger.create({
			animation: laptopTimeline,
			trigger: laptop,
			toggleActions: "play pause resume pause",
		});
	});
}
