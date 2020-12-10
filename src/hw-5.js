// homework 5 part 1
/* Создайте массив целых чисел из 10 элементов
1. Выведите в консоль сумму всех элементов массива */

export function getSumElements(numArr) {
  if (!(numArr instanceof Array)) {
    throw new Error("Not array");
  }
  let sum = 0;
  numArr.forEach((el) => {
    sum += Number(el);
  });
  if (Number.isNaN(Number(sum))) {
    throw new Error("Some array's element is not a number");
  }
  console.log(`Sum of array's elements = ${sum}`);
}

// homework 5 part 2
/* 2. Создайте новый массив на основе исходного, в
котором каждый элемент будет вдвое больше
элемента исходного массива с таким же индексом.
a[1] = 3 , b[1] = 6 , где a исходный массив, b новый
массив. */

export function createArrWithDoubleValues(numArr) {
  if (!(numArr instanceof Array)) {
    throw new Error("Not array");
  }
  return numArr.map((el) => el * 2);
}

// homework 5 part 3
/* *Найдите и выведите в консоль наибольший и
наименьший элементы исходного массива. */

export function getMaxAndMinElement(numArr) {
  if (!(numArr instanceof Array)) {
    throw new Error("Not array");
  }
  const max = Math.max.apply(null, numArr);
  const min = Math.min.apply(null, numArr);
  console.log(`Max element = ${max}, min element = ${min}`);
}
