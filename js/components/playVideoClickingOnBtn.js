// Play youtube video clicking on custom button
import configCommon from "../config/config";

const ytPlayBtns = document.querySelectorAll(".yt-player-btn");

if (ytPlayBtns.length > 0) {
	Array.from(ytPlayBtns).forEach((btn) => {
		btn.addEventListener("click", function() {
			const wrapper = btn.closest(".block-video-info");
			// const videoToPlay = document.getElementById(btn.getAttribute("data-video-to-play"));

			wrapper.classList.add(configCommon.classesCommon.classHidden);
		});

	});
}
