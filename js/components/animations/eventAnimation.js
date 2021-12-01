// Laptop animation
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const events = document.querySelectorAll(".js-event-animation");

const showElements = (timeline, el, duration = 0.4) => timeline.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration });

if (events.length > 0) {
	Array.from(events).forEach((event) => {
		const laptop = event.querySelector(".js-event-laptop");
		const globe = event.querySelector(".js-event-globe");
		const calendar = event.querySelector(".js-event-calendar");
		const book = event.querySelector(".js-event-book");
		const eventTimeline = gsap.timeline();

		if (event.classList.contains("v-hidden")) {
			gsap.set(event, { visibility: "visible" });
		}

		if (laptop) {
			showElements(eventTimeline, laptop);
		}

		if (globe) {
			showElements(eventTimeline, globe);
		}

		if (calendar) {
			showElements(eventTimeline, calendar);
		}

		if (book) {
			showElements(eventTimeline, book);
		}

		ScrollTrigger.create({
			animation: eventTimeline,
			trigger: event,
			toggleActions: "play pause resume pause",
		});
	});
}
