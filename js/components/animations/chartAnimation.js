// Draw tree, show elems and move leaves
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const charts = document.querySelectorAll(".js-chart-animation");

if (charts.length > 0) {
	Array.from(charts).forEach((chart) => {
		const chartLines = chart.querySelectorAll(".js-chart-line");
		const chartTimeline = gsap.timeline();

		if (chartLines.length > 0) {
			gsap.set(chartLines, { transformOrigin: "center bottom" });

			chartTimeline.fromTo(chartLines, { scaleY: 0 }, { scaleY: 1, duration: 1.2 });
		}

		ScrollTrigger.create({
			animation: chartTimeline,
			trigger: chart,
			toggleActions: "play pause resume pause",
		});
	});
}
