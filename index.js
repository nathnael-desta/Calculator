function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function devide(x, y) {
  return x / y;
}
function remainder(x, y) {
  return x % y;
}

const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const ac = document.querySelector(".ac");
const sign = document.querySelector(".sign");
const remain = document.querySelector(".remainder");
const division = document.querySelector(".devide");
const multiplication = document.querySelector(".multiply");
const addition = document.querySelector(".plus");
const subtraction = document.querySelector(".minus");
const reset = document.querySelector(".reset");
const equal = document.querySelector(".equals");
const display = document.querySelector(".display");

let isEqual = false;
let num1 = null;
let num2 = null;
let operatorOn = false;
let operator;

function addToDisplay() {
  if (!operatorOn) {
    let text = display.textContent;
    text += this.textContent;
    display.textContent = text;
  } else {
    display.textContent = this.textContent;
  }
  operatorOn = false;
}

function addToDisplayFront() {
  let text = display.textContent;
  display.textContent = text[0] == "-" ? text.slice(1) : "-" + text;
}

zero.addEventListener("click", addToDisplay);
one.addEventListener("click", addToDisplay);
two.addEventListener("click", addToDisplay);
three.addEventListener("click", addToDisplay);
four.addEventListener("click", addToDisplay);
five.addEventListener("click", addToDisplay);
six.addEventListener("click", addToDisplay);
seven.addEventListener("click", addToDisplay);
eight.addEventListener("click", addToDisplay);
nine.addEventListener("click", addToDisplay);
zero.addEventListener("click", addToDisplay);
sign.addEventListener("click", addToDisplayFront);

function operate() {
  operatorOn = true;
  if (!num1) {
    num1 = parseInt(display.textContent);
  } else {
    let prevNum = parseInt(display.textContent);
    num1 =
      operator == "+"
        ? add(num1, prevNum)
        : operator == "-"
        ? subtract(num1, prevNum)
        : operator == "x"
        ? multiply(num1, prevNum)
        : operator == "%"
        ? remainder(num1, prevNum)
        : devide(num1, prevNum);
    display.textContent = num1;
  }
  operator = this.textContent;
}

addition.addEventListener("click", operate);
subtraction.addEventListener("click", operate);
multiplication.addEventListener("click", operate);
division.addEventListener("click", operate);
remain.addEventListener("click", operate);

function answer() {
  let prevNum = parseInt(display.textContent);
  display.textContent =
    operator == "+"
      ? add(num1, prevNum)
      : operator == "-"
      ? subtract(num1, prevNum)
      : operator == "x"
      ? multiply(num1, prevNum)
      : operator == "%"
      ? remainder(num1, prevNum)
      : devide(num1, prevNum);
  num1 = null;
}

equal.addEventListener("click", answer);

function empty() {
  isEqual = false;
  num1 = null;
  num2 = null;
  operatorOn = false;
  display.textContent = "";
}

ac.addEventListener("click", empty);
