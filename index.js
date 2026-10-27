const interact = {
	input: document.querySelector(".hero >input"),
	button: document.querySelector(".hero >button"),
	results: document.querySelector(".results")
};

const METER_FEET_CONVERSION_RATE = 3.281;
const LITER_GALLON_CONVERSION_RATE = 0.264;
const KILOGRAM_POUND_CONVERSION_RATE = 2.204;

function convertNumber(num) {
	let html = `
	<article>
		<h1>Length (Meter/Feet)</h1>
		<p>${num} meters = ${(num * METER_FEET_CONVERSION_RATE).toFixed(3)} feet | ${num} feet = ${(num / METER_FEET_CONVERSION_RATE).toFixed(3)} meters</p>
	</article>
	<article>
		<h1>Volume (Liters/Gallons)</h1>
		<p>${num} liters = ${(num * LITER_GALLON_CONVERSION_RATE).toFixed(3)} gallons | ${num} gallons = ${(num / LITER_GALLON_CONVERSION_RATE).toFixed(3)} liters</p>
	</article>
	<article>
		<h1>Length (Meter/Feet)</h1>
		<p>${num} kilos = ${(num * KILOGRAM_POUND_CONVERSION_RATE).toFixed(3)} pounds | ${num} pounds = ${(num / KILOGRAM_POUND_CONVERSION_RATE).toFixed(3)} kilos</p>
	</article>
	`;
	interact.results.innerHTML = html;
}

function addListeners() {
	interact.input.addEventListener("input", function() {
		const value = interact.input.value;
		const converted = Number(value);
		if (value.length < 1 || Number.isNaN(converted) || interact.input.value !== converted.toString() || converted <= 0) {
			interact.button.disabled = true;
		} else interact.button.disabled = false;
	});
	interact.button.addEventListener("click", function() {
		convertNumber(Number(interact.input.value));
	});
}

addListeners();