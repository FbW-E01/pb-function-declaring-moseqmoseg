////# Declaring Functions
//
////#### 1. Multiply - Function Declaration
//* Create a function that multiples a number by another number.
//
//#### 2. Multiply - Function Declarations as Values
//* Rework the syntax of the above function so that the function declaration is stored as a value.
//
//#### 3. Multiply - Arrow Function
//* Rework the syntax of the function declaration so that is uses the arrow function shorthand.
//
//#### 4. Declarations
//* Create functions (using all three declarations) to check the remainder of division given two numbers.

//1
function ex1(num1, num2) {
    console.log(num1 * num2);
}

ex1(450, 5);

//2
const ex2 = function(num1, num2) {
    console.log(num1 * num2);
};

ex2(5, 4);

//3
let ex3 = (num1, num2) => {
    console.log(num1 * num2);
};

ex3(4, 5);

//4


//4A 
function ex4a(num1, num2) {
    console.log(num1 % num2);
}
ex4a(40, 10);

//4B
const ex4b = function(num1, num2) {
    console.log(num1 % num2);
};

ex4b(42, 10);

//4C
const ex4c = (num1, num2) => {
    console.log(num1 % num2);
};

ex4c(55, 10);