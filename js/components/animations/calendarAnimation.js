// Appearing and disappearing lines
import { gsap } from "gsap";

const calendars = document.querySelectorAll(".js-calendar-animation");

if (calendars.length > 0) {
	Array.from(calendars).forEach((calendar) => {
		const lines = calendar.querySelectorAll(".js-calendar-line");
		const sheet = calendar.querySelector(".js-calendar-sheet");
		const calendarTimeline = gsap.timeline({ repeat: -1 });

		if (lines.length > 0) {
			calendarTimeline.fromTo(lines, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.1, stagger: { each: 0.5 } });
		}

		// if (sheet) {
		// 	gsap.set(sheet, { transformOrigin: "center" });
		// 	calendarTimeline.from(sheet, { autoAlpha: 0, rotateX: 97, rotateY: 32 }, "-=0.7");
		// }


		// Array.from(lines).forEach((line) => {
		// 	calendarTimeline.to(line, { autoAlpha: 1, duration: 0.5 });
		// });
	});

	// gsap.set(lines, { autoAlpha: 0 });
}
