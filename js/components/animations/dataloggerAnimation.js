// Datalogger animation
import { gsap, Elastic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const dataloggers = document.querySelectorAll(".js-datalogger-animation");

if (dataloggers.length > 0) {
	Array.from(dataloggers).forEach((logger) => {
		const dataloggerTimeline = gsap.timeline();
		const vessel = logger.querySelector(".js-datalogger-vessel");
		const lid = logger.querySelector(".js-datalogger-lid");
		const antenna = logger.querySelector(".js-datalogger-antenna");
		const circles = logger.querySelectorAll(".js-datalogger-circle");
		const indicator = logger.querySelector(".js-datalogger-indicator");
		const lines = logger.querySelectorAll(".js-datalogger-line");

		if (logger.classList.contains("v-hidden")) {
			gsap.set(logger, { visibility: "visible" });
		}

		if (vessel) {
			dataloggerTimeline.from(vessel, { autoAlpha: 0, translateY: -20, duration: 0.5 });
		}

		if (lid) {
			gsap.set(lid, { transformOrigin: "right top" });
			dataloggerTimeline.from(lid, {
				autoAlpha: 0, skewY: -8, translateX: -5, translateY: -10, duration: 0.5,
			});
		}

		if (lines.length > 0) {
			Array.from(lines).forEach((line) => {
				const initialOpacity = +line.dataset.lineOpacity;
				const finalOpacity = initialOpacity !== 1 ? 1 : 0.5;

				gsap.fromTo(line, { autoAlpha: initialOpacity }, { autoAlpha: finalOpacity, duration: 1, repeat: -1, yoyo: true });
				dataloggerTimeline.fromTo(line, { scaleY: 0 }, { scaleY: 1, duration: 0.3 });
			});
		}

		if (antenna) {
			gsap.set(antenna, { transformOrigin: "50% 100%" });
			dataloggerTimeline.from(antenna, {
				autoAlpha: 0, rotateZ: 50, ease: Elastic.easeOut, duration: 1,
			});
		}

		if (indicator) {
			gsap.to(indicator, {
				fill: "#000", repeat: -1, yoyo: true, duration: 0.5,
			});
		}

		if (circles.length > 0) {
			gsap.set(circles, { opacity: 0, scale: 0.9, transformOrigin: "center center" });

			gsap.to(circles, {
				scale: 1.1,
				duration: 1.5,
				stagger: {
					each: 0.5,
					repeat: -1,
				},
			});

			gsap.to(circles, {
				opacity: 1,
				duration: 0.75,
				stagger: {
					each: 0.5,
					repeat: -1,
					yoyo: true,
				},
			});
		}

		ScrollTrigger.create({
			animation: dataloggerTimeline,
			trigger: logger,
			toggleActions: "play pause resume pause",
		});
	});
}
