// Draw tree, show elems and move leaves
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import preparePath from "../../functions/preparePath";

gsap.registerPlugin(ScrollTrigger);

const briefcaseElems = document.querySelectorAll(".js-briefcase-animation");

if (briefcaseElems.length > 0) {
	Array.from(briefcaseElems).forEach((briefcase) => {
		const briefcaseBody = briefcase.querySelector(".js-briefcase-body");
		const briefcaseOpener = briefcase.querySelector(".js-briefcase-opener");
		const briefcaseHandler = briefcase.querySelector(".js-briefcase-handler");
		const briefcaseTimeline = gsap.timeline();

		preparePath(briefcaseHandler);

		if (briefcase.classList.contains("v-hidden")) {
			gsap.set(briefcase, { visibility: "visible" });
		}

		if (briefcaseBody) {
			briefcaseTimeline.fromTo(briefcaseBody, { autoAlpha: 0, translateY: -40 }, { autoAlpha: 1, translateY: 0, duration: 0.6 });
		}

		if (briefcaseOpener) {
			briefcaseTimeline.fromTo(briefcaseOpener, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 });
		}

		if (briefcaseHandler) {
			briefcaseTimeline.fromTo(briefcaseHandler, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 });
		}

		ScrollTrigger.create({
			animation: briefcaseTimeline,
			trigger: briefcase,
			toggleActions: "play pause resume pause",
		});
	});
}
