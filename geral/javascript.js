let num1 = 0.7;
let num2 = 0.1;
num1 += num2;
num1 += num2;
num1 += num2; // 1.0
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2; // 2.0


num1 = parseFloat(num1);

console.log(typeof num1);
console.log(num1);
console.log(Number.isInteger(num1));