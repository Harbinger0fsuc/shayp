// Scale up elements on scroll
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scaleUpElems = document.querySelectorAll(".js-scale-up");

if (scaleUpElems.length > 0) {
	Array.from(scaleUpElems).forEach((el) => {
		const { initialScale = 0, finalScale = 1, scaleDuration = 1.5 } = el.dataset;
		const scaleUpTimeline = gsap.timeline();

		gsap.set(el, { transformOrigin: "center bottom" });

		scaleUpTimeline.fromTo(el, {
			scaleY: +initialScale,
		},
		{
			scaleY: +finalScale,
			duration: +scaleDuration,
		});

		if (el.classList.contains("js-scale-up--delay")) {
			const {
				initialOpacity = 0,
				finalOpacity = 1,
				opacityDuration = 0.5,
				opacityDelay = 0.8,
			} = el.dataset;

			scaleUpTimeline.fromTo(el, {
				opacity: +initialOpacity,
			},
			{
				opacity: +finalOpacity,
				duration: +opacityDuration,
			}, `-=${+opacityDelay}`);
		}

		ScrollTrigger.create({
			animation: scaleUpTimeline,
			trigger: el,
			toggleActions: "play pause resume pause",
		});
	});
}

// gsap.fromTo(".elem-appearing-from-bottom2", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 });
