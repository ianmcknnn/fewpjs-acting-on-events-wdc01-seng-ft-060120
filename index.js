function moveDodgerLeft() {
	let leftNumbers = dodger.style.left.replace("px", "");
	let left = parseInt(leftNumbers, 10);

	if(left > 9) {
		dodger.style.left = `${left - 10}px`;
	}
}

function moveDodgerRight() {
	let leftNumbers = dodger.style.left.replace("px", "");
	let left = parseInt(leftNumbers, 10);

	if(180 - left > 9) {
		dodger.style.left = `${left + 10}px`;
	}
}
