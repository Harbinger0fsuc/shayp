// Insert spaces for long numbers
function numberWithSpaces(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default numberWithSpaces;
