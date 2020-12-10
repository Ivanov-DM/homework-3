// homework 6 part 1
/* Напишите функцию diff, которая получает в качестве
параметров 2 числа и возвращает разницу между
наибольшим и наименьшим. */

export function diff(num1, num2) {
  if (Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))) {
    throw new Error("Not a number");
  }
  if (num1 > num2) {
    return num1 - num2;
  }
  return num2 - num1;
}

// homework 6 part 2
/* Напишите функцию isWord, которая принимает на
вход текстовую строку. Функция возвращает true, если
строка состоит из одного слова и false, если из
нескольких */

export function isWord(str) {
  const arr = str.match(/[^\s]+/g);
  return arr.length === 1;
}

// homework 6 part 3
/* *Напишите функцию pow (a, x), которая вернёт
значение числа a, возведённого в степень x */

export function pow(a, x) {
  if (x === 0) {
    return 1;
  }
  let result = a;
  if (Number.isInteger(x)) {
    for (let i = 0; i < Math.abs(x) - 1; i++) {
      result *= a;
    }
    if (x < 0) {
      return 1 / result;
    }
    return result;
  }
  result = a ** Math.abs(x);
  if (x < 0) {
    return 1 / result;
  }
  return result;
}
