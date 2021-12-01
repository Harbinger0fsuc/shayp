// Count up numbers
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import numberWithSpaces from "../functions/numberWithSpaces";

gsap.registerPlugin(ScrollTrigger);

const counts = document.querySelectorAll(".js-counts");

if (counts.length > 0) {
	Array.from(counts).forEach((count) => {
		const { number } = count.dataset;
		const initialVal = { val: 0 };
		const arrNumbers = number.split(".");
		const decimals = arrNumbers.length > 1 ? arrNumbers[1].length : 0;

		gsap.to(initialVal, {
			val: number,
			duration: 2,
			scrollTrigger: count,
			onUpdate: function() {
				count.textContent = numberWithSpaces(initialVal.val.toFixed(decimals));
			}
		});
	});
}
