// homework 3 part 1
/* Вывести в консоль сумму всех целых чисел от 50 до
100. */

export function getSumNumbersOnInterval(from, to) {
  if (Number.isNaN(Number(from)) || Number.isNaN(Number(to))) {
    throw new Error("Not a number");
  }
  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += Number(i);
  }
  console.log(`Sum numbers from ${from} to ${to} is ${sum}`);
}

// homework 3 part 2
/* Вывести в консоль таблицу умножения на 7.
7 x 1 = 7
7 x 2 = 14
…
7 x 9 = 63 */

export function getMultiplicationTableForNum(param) {
  if (Number.isNaN(Number(param))) {
    throw new Error("Not a number");
  }
  const multiplicationTable = [];
  for (let i = 1; i < 11; i++) {
    multiplicationTable.push(`${param} x ${i} = ${param * i}`);
  }
  console.log(multiplicationTable.join("\n"));
}

// homework 3 part 3
/* *Запросить у пользователя ввод числа N.
 Вывести в консоль среднее арифметическое всех
 нечётных чисел от 1 до N */

export function getAverageOfOddNumbers() {
  const input = prompt("Enter a number:");
  if (Number.isNaN(Number(input))) {
    throw new Error("Not a number");
  }
  let count = 0;
  let sum = 0;
  for (let i = 1; i <= input; i++) {
    if (i % 2 === 0) {
      count += 1;
      sum += i;
    }
  }
  const average = sum / count;
  console.log(`Average of odd numbers from 1 to ${input} is ${average}`);
}
