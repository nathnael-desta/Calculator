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

const dot = document.querySelector(".dot");
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
const back = document.querySelector('.back');

let isEqual = false;
let num1 = null;
let num2 = null;
let operatorOn = false;
let operator;
let onlyOnce = false;

function addToDisplay() {
  if (this.textContent == "." && onlyOnce){
    return;
  }
  if(this.textContent == ".") {
    onlyOnce = true;
  }
  if (!operatorOn) {
    let text = display.textContent;
    if (text.length < 9) {
      text += this.textContent;
      display.textContent = text;
    }
  } else {
    display.textContent = this.textContent;
  }
  operatorOn = false;

  this.classList.add('darker');
  setTimeout(() => this.classList.remove('darker'), 200);
}

function addToDisplayFront() {
  this.classList.add('darker');
  setTimeout(() => this.classList.remove('darker'), 200);
  let text = display.textContent;
  if (display.textContent == ""){
    return;
  }
  if (text.length < 9) {
    display.textContent = text[0] == "-" ? text.slice(1) : "-" + text;
  }

  
}

function remove(){
  if (operatorOn){
    return;
  }
  if(display.textContent != ""){
    display.textContent = display.textContent.slice(0,display.textContent.length - 1)
  }
}

dot.addEventListener("click", addToDisplay);
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
back.addEventListener('click', remove);

function operate() {
  operatorOn = true;
  onlyOnce = false;
  if (!num1) {
    num1 = parseFloat(display.textContent);
  } else {
    if (operator == "÷" && num1 == 0) {
      display.textContent = "0 div! press AC"
      return;
    }
    let prevNum = parseFloat(display.textContent);
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
    display.textContent = parseFloat(num1.toFixed(5));
  }
  operator = this.textContent;

  this.classList.add('darker');
  setTimeout(() => this.classList.remove('darker'), 200);
}

addition.addEventListener("click", operate);
subtraction.addEventListener("click", operate);
multiplication.addEventListener("click", operate);
division.addEventListener("click", operate);
remain.addEventListener("click", operate);

function answer() {
  onlyOnce = false;
  let prevNum = parseFloat(display.textContent);
  if (operatorOn || typeof num1 != "number") {
    display.textContent = "bad op! press AC"
    return;
  }
  if (operator == "÷" && parseInt(display.textContent) == 0) {
    display.textContent = "0 div! press AC"
    return;
  }
  let z =
    operator == "+"
      ? add(num1, prevNum).toFixed(5)
      : operator == "-"
      ? subtract(num1, prevNum).toFixed(5)
      : operator == "x"
      ? multiply(num1, prevNum).toFixed(5)
      : operator == "%"
      ? remainder(num1, prevNum).toFixed(5)
      : devide(num1, prevNum).toFixed(5);
    display.textContent = parseFloat(z);
  num1 = null;

  this.classList.add('darker');
  setTimeout(() => this.classList.remove('darker'), 200);
}

equal.addEventListener("click", answer);

function empty() {
  isEqual = false;
  num1 = null;
  num2 = null;
  operatorOn = false;
  onlyOnce = false;
  display.textContent = "";

  this.classList.add('darker');
  setTimeout(() => this.classList.remove('darker'), 200);
}

ac.addEventListener("click", empty);
