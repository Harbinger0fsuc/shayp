// Scroll to top when clicking on back to top button
const backToTopBtn = document.querySelector(".btn-to-top");

if (backToTopBtn) {
	backToTopBtn.addEventListener("click", function() {
		window.scroll({ top: 0, left: 0, behavior: "smooth" });
	});
};
