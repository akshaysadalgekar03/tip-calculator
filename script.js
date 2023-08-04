const billAmount = document.querySelector("#bill");
const tipPercent = document.querySelectorAll('.tip-percent');
const peopleCount = document.querySelector("#people");
const tipAmountValue = document.querySelector(".tip-amount-value");
const totalAmountValue = document.querySelector(".total-amount-value");
const customValue = document.querySelector(".custom");
const resetButton = document.querySelector(".reset-btn");

class Calculator {
	constructor(billAmountInput, peopleCountInput, tipPercentInput) {
		this.billAmountInput = billAmountInput;
		this.peopleCountInput = peopleCountInput;
		this.tipPercentInput = tipPercentInput;
	}

	reset() {
		this.billAmountInput.value = '0'; // Update the value property to clear the input field
		this.peopleCountInput.value = '2'; // Update the value property to clear the input field
		tipAmountValue.innerText = "$0.00"
		totalAmountValue.innerText = "$0.00"
	}
	tip() {
		const bill = parseFloat(this.billAmountInput.value);
		const tip = parseFloat(this.tipPercentInput);
		const tipValue = bill * (tip / 100);
		return tipValue
	}

	billSplit() {

		const tip = this.tip();
		const bill = parseFloat(this.billAmountInput.value);
		const people = parseFloat(this.peopleCountInput.value);
		const tipPerPerson = tip / people;
		const totalPerPerson = (bill + tip) / people;
		return [tipPerPerson, totalPerPerson]
	}

	updateDisplay() {
		// Calculate and display the results
		const [tipPerPerson, totalPerPerson] = this.billSplit();
		const tipPerPersonString = tipPerPerson.toLocaleString("en-US", {
			style: "currency",
			currency: "USD"
		});
		const totalPerPersonString = totalPerPerson.toLocaleString("en-US", {
			style: "currency",
			currency: "USD"
		});
		tipAmountValue.innerText = tipPerPersonString
		totalAmountValue.innerText = totalPerPersonString
	}


}
const calculator = new Calculator(billAmount, peopleCount, tipPercent);

// Add onchange event listeners to the input elements
billAmount.addEventListener('change', () => {
	calculator.updateDisplay;
});
peopleCount.addEventListener('change', () => {
	calculator.updateDisplay;
});

tipPercent.forEach((element, index) => {

	if (index < 5) {
		element.addEventListener('click', () => {
			if (element.classList.contains("tip-percent")) {
				const tipVal = element.value.slice(0, -1);
				calculator.tipPercentInput = tipVal;
				calculator.updateDisplay();
			}
		})
	}

});

customValue.addEventListener('change', () => {
	if (isNaN(customValue.value)) {
		alert("Please give valid custom percentage!")
		customValue.value = ""
	} else {
		const tipValue = Number(customValue.value)
		calculator.tipPercentInput = tipValue;
		calculator.updateDisplay();
	}
})

resetButton.addEventListener('click', () => {
	calculator.reset()
})