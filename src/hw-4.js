// homework 4 part 1
/* Создайте объект user, содержащий поле name со
значением ‘John'.
1. Запросить у пользователя ввод числа. Записать
введенное значение в поле age объекта user */

export function addField(user, field) {
  const input = prompt("Enter a number: ");
  if (Number.isNaN(Number(input))) {
    throw new Error("Not a number");
  }
  user[field] = +input;
}

// homework 4 part 2
/* 2. Создать копию объекта user с именем admin.
Добавить новому объекту поле role со значением
admin */

export function createAdmin(obj) {
  const newObj = { ...obj, name: "admin", role: "admin" };
  return newObj;
}

// homework 4 part 3
/* *Записать все значения полей объекта admin в
отдельные переменные. Имена переменных
должны совпадать с названиями полей */

export function getVariableFromObj(obj) {
  const variables = [];
  const propEntries = Object.entries(obj);
  for (let i = 0; i < propEntries.length; i++) {
    variables.push(`${propEntries[i][0]} = ${propEntries[i][1]}`);
  }
  console.log(variables.join("\n"));
}
