// homework 9 part 1
/* Даны длины трёх сторон треугольника. Определить,
является ли треугольник прямоугольным. */

export function isRightTriangle(a, b, c) {
  if (
    Number.isNaN(Number(a)) ||
    Number.isNaN(Number(b)) ||
    Number.isNaN(Number(c))
  ) {
    throw new Error("Not a number");
  }
  return c ** 2 === a ** 2 + b ** 2;
}

// homework 9 part 2
/* Пользователь вводит число R. Написать программу,
которая выведет в консоль длину окружности и
площадь круга с радиусом R */

export function printCircumferenceAndCircleArea(r) {
  if (r < 0) {
    throw new Error("R must be positive");
  }
  const circumference = 2 * Math.PI * r;
  const circleArea = Math.PI * r ** 2;
  console.log(
    `r = ${r}, circumference = ${circumference.toFixed(
      4
    )}, circle area = ${circleArea.toFixed(4)}`
  );
}

// homework 9 part 3
/* Пользователь вводит числа a, b и c. Написать
программу, выводящую корни квадратного
уравнения с коэффициентами a, b и c */

export function printRootsOfQuadraticEquation(a, b, c) {
  const D = b ** 2 - 4 * a * c;
  if (D < 0) {
    console.log("No roots");
  } else if (D === 0) {
    const root = -((b / 2) * a);
    console.log(`root = ${root}`);
  } else {
    const root1 = ((-b - Math.sqrt(D)) / 2) * a;
    const root2 = ((-b + Math.sqrt(D)) / 2) * a;
    console.log(`root 1 = ${root1}, root 2 = ${root2}`);
  }
}
