// Show more description
import configCommon from "../config/config";
import expandElement from "../functions/expandElement";

const btnShowMore = document.querySelectorAll(".js-sh-more-desc");

if (btnShowMore.length) {
	Array.from(btnShowMore).forEach((btn) => {
		let isOpen = Boolean(+btn.dataset.isOpen);

		btn.addEventListener("click", function (e) {
			e.preventDefault();

			const descToShow = this.getAttribute("data-desc-to-show");
			const dotsToHide = this.getAttribute("data-desc-dots");
			const elToShow = document.getElementById(descToShow);
			const thisBtnText = this.querySelector(".btn-link__text");
			const thisBtnArrow = this.querySelector(".btn-link__arrow");

			isOpen = !isOpen;

			if (isOpen) {
				thisBtnText.textContent = configCommon.contentCommon.translations.translationEn.readLess;
				thisBtnText.setAttribute("data-btn-text", configCommon.contentCommon.translations.translationEn.readLess);
				document.getElementById(dotsToHide).style.display = "none";
				thisBtnArrow.style.transform = "rotate(180deg)";
			} else {
				thisBtnText.textContent = configCommon.contentCommon.translations.translationEn.readMore;
				thisBtnText.setAttribute("data-btn-text", configCommon.contentCommon.translations.translationEn.readMore);
				document.getElementById(dotsToHide).style.display = "inline";
				thisBtnArrow.style.transform = "rotate(0)";
			}

			expandElement(elToShow, elToShow.parentNode, true, configCommon.classesCommon.classActive);
		});
	});
}
