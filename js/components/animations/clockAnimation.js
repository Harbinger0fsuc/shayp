// Clock animation
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clocks = document.querySelectorAll(".js-clock-animation");

if (clocks.length > 0) {
	Array.from(clocks).forEach((clock) => {
		if (clock.classList.contains("v-hidden")) {
			const clockEl = clock.querySelector(".js-clock-el");
			const mobile = clock.querySelector(".js-clock-mob");
			const triangle = clock.querySelector(".js-clock-triangle");
			const clockHands = clock.querySelectorAll(".js-clock-hand");
			const clockTimeline = gsap.timeline();

			if (clock.classList.contains("v-hidden")) {
				gsap.set(clock, { visibility: "visible" });
			}

			if (clockEl) {
				clockTimeline.fromTo(clockEl, { autoAlpha: 0, translateY: 50 }, { autoAlpha: 1, translateY: 0, duration: 0.6 });
			}

			if (mobile) {
				clockTimeline.fromTo(mobile, { autoAlpha: 0, translateY: -40 }, { autoAlpha: 1, translateY: 0, duration: 0.6 });
			}

			if (triangle) {
				clockTimeline.fromTo(triangle, { autoAlpha: 0, translateY: -20 }, { autoAlpha: 1, translateY: 0, duration: 0.6 });
			}

			if (clockHands.length > 0) {
				Array.from(clockHands).forEach((hand) => {
					const { transformOrigin } = hand.dataset;

					gsap.set(hand, { transformOrigin });

					if (hand.classList.contains("big")) {
						clockTimeline.from(hand, { rotate: 35, translateX: -1, repeat: -1, yoyo: true, repeatDelay: 3 });
					}

					if (hand.classList.contains("small")) {
						clockTimeline.from(hand, { rotate: 45, translateX: -7, translateY: 3, repeat: -1, yoyo: true, repeatDelay: 3 });
					}
				});
			}

			ScrollTrigger.create({
				animation: clockTimeline,
				trigger: clock,
				toggleActions: "play pause resume pause",
			});
		}
	});
}

// transform-box: fill-box;
// transform-origin: left top;
// transform: rotate(
// 35deg
// ) translateY(-6px);
// transform-box: fill-box;
// transform-origin: center bottom;
// transform: rotate(
// 45deg
// ) translateX(-4px);
