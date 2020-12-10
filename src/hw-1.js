// homework 1 part 1
/* В переменны a и b хранятся числа. Написать
программу, которая выводит в консоль произведение
и сумму этих чисел. */

export function getSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Not a number");
  }
  console.log(`${a} + ${b} = ${a + b}`);
}

export function getMult(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Not a number");
  }
  console.log(`${a} * ${b} = ${a * b}`);
}

// homework 1 part 2
/* В двух переменных хранятся строки символов.
Написать программу, которая выведет в консоль
суммарное количество символов в обоих строках */

export function getSumOfChair(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    throw new Error("Not a string");
  }
  console.log(
    `"${str1}" and "${str2}" contains ${str1.length + str2.length} chairs`
  );
}

// homework 1 part 3
/* *Написать программу, которая запрашивает у
пользователя ввод трёх значного числа, а потом
выводит в консоль сумму цифр введённого числа. */

export function getSumOfDigitInNumber() {
  const input = prompt("Enter a tree-digit number:");
  if (Number.isNaN(Number(input))) {
    throw new Error("Not a number");
  }
  let sum = 0;
  const digitArr = input.toString().split("");
  for (let i = 0; i < digitArr.length; i++) {
    sum += Number(digitArr[i]);
  }
  console.log(`Sum of digit from number ${input} = ${sum}`);
}
