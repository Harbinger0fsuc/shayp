// Draw tree, show elems and move leaves
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import preparePath from "../../functions/preparePath";

gsap.registerPlugin(ScrollTrigger);

const treeElems = document.querySelectorAll(".js-tree-animation");

if (treeElems.length > 0) {
	Array.from(treeElems).forEach((tree) => {
		const branches = tree.querySelectorAll(".js-drawing-branch");
		const leaves = tree.querySelectorAll(".js-moving-leaves");
		const drawTreeTimeline = gsap.timeline();

		if (tree.classList.contains("v-hidden")) {
			gsap.set(tree, { visibility: "visible" });
		}

		if (branches.length > 0) {
			Array.from(branches).forEach((branch) => {
				preparePath(branch);

				drawTreeTimeline.to(branch, { strokeDashoffset: 0, duration: 0.4 });

				if (branch.classList.contains("js-drawing-branch--movedown")) {
					drawTreeTimeline.fromTo(branch, { scaleY: 0, transformOrigin: "center top" }, { scaleY: 1, duration: 0.2 });
				}
			});
		}

		if (leaves.length > 0) {
			const time = 2;
			const d = 0.3;

			gsap.set(leaves, { transformOrigin: "center bottom" });

			drawTreeTimeline.fromTo(leaves, { scaleY: 0 }, { scaleY: 1, duration: 0.2, stagger: { each: 0.2 } });

			Array.from(leaves).forEach((leaf, index) => {
				const leafTimeline = gsap.timeline({ delay: 2 });

				leafTimeline.to(leaf, { rotate: 15, duration: time, ease: "none", repeat: -1, yoyo: true }, 0);
				drawTreeTimeline.add(leafTimeline, (index) * d);
			});
		}

		ScrollTrigger.create({
			animation: drawTreeTimeline,
			trigger: tree,
			toggleActions: "play pause resume pause",
		});
	});
}
