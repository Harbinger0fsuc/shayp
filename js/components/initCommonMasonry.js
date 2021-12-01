// Common masonry layout
const gridMasonry = document.querySelectorAll(".grid-masonry");

if (gridMasonry.length > 0) {
	Array.from(gridMasonry).forEach((grid) => {
		const isotope = new Isotope(grid, {
			itemSelector: ".grid-masonry__item",
		});

		function reflow(){
			isotope.layout();
		}

		new imagesLoaded(grid);

		grid.addEventListener("progress", reflow);
		grid.addEventListener("always", reflow);
		grid.addEventListener("done", reflow);
		grid.addEventListener("fail", reflow);
		grid.addEventListener("lazyloaded", reflow);
		grid.addEventListener("load", reflow);
	});
}
