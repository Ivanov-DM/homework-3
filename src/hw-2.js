// homework 2 part 1
/* В переменных a и b хранятся числа. Вывести в
консоль наибольшее из них */

export function getMaxValue(num1, num2) {
  if (Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))) {
    throw new Error("Not a number");
  }
  const max = num1 > num2 ? num1 : num2;
  console.log(`Of the numbers ${num1} and ${num2} bigger ${max}`);
}

// homework 2 part 2
/* Запросить у пользователя ввод числа от 1 до 12.
Вывести в консоль название месяца, соответствующее
этому числу (1 январь, 2 февраль и т.д.). */

export function getMonthTitle() {
  const input = prompt("Enter a number from 1 to 12:");
  if (Number.isNaN(Number(input))) {
    throw new Error("Not a number");
  }
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[+input - 1];
  if (!month) {
    console.log(`Such month is not exists`);
  } else {
    console.log(`${input} is a ${month}`);
  }
}

// homework 2 part 3
/* *В переменных circle и square хранятся площади круга
и квадрата соответственно. Написать программу,
которая определяет, поместится ли круг в квадрат. */

export function isPlaced(circleArea, squareArea) {
  if (Number.isNaN(Number(circleArea)) || Number.isNaN(Number(squareArea))) {
    throw new Error("Not a number");
  }
  const radius = Math.sqrt(Number(circleArea) / Math.PI);
  const sideLength = Math.sqrt(Number(squareArea));
  if (radius < sideLength / 2) {
    return true;
  }
  return false;
}
