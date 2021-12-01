// Get total path length
function preparePath(elem) {
	const lineLength = elem.getTotalLength();

	elem.style.strokeDasharray = lineLength;
	elem.style.strokeDashoffset = lineLength;
}

export default preparePath;
