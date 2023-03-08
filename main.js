//ukol 1
/*

const salary = (wage, hours, days) => {
	return Math.round(wage * hours * days)
}

const tax = (salary, taxPercentage) => {
	return Math.round((salary * (100 - taxPercentage)) / 100)
}
const taxPercentage = 15
const wage= prompt('Enter your wage/hour value:');
const hours= prompt('Enter working hours per day:');
const days= prompt('Enter working days in a month:');
const noTax= salary(wage, hours, days)
const afterTax= tax(noTax, taxPercentage)

salary();
tax();

document.body.innerHTML =
`<h1>Salary after tax count:</h1>
<h3>Your entered values:</h3>
<p>Wage per hour: ${wage} Kč</p>
<p>Hours: ${hours}</p>
<p>Days: ${days}</p>
<br>
<h3>Calculation:</h3>
<p>No Tax: ${noTax} Kč</p>
<p>After Tax: ${afterTax} Kč</p>`
*/

//ukol 2

const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');
const finalResult = document.querySelector('#number3');
const calculateButton = document.querySelector('.result');

function buttonAction(button) {
  if (button.classList.contains('active')) {
    button.classList.remove('active');
  } else {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  }
}

const calculate = () => {
  const number1 = document.querySelector('#number1').value;
  const number2 = document.querySelector('#number2').value;
  const num1 = parseFloat(number1);
  const num2 = parseFloat(number2);
  const operation = document.querySelector('.active').textContent;
  let result;

  if (operation === '+') {
    result = num1 + num2;
  } else if (operation === '-') {
    result = num1 - num2;
  } else if (operation === '*') {
    result = num1 * num2;
  } else if (operation === ':') {
    result = num1 / num2;
  }

  finalResult.value = result;
};

calculateButton.addEventListener('click', calculate);

