/*
Пользователь вводит текстовую строку. Определить с
помощью регулярного выражения,
 */

// homework 10 part 1
/* является ли введённая строка Датой. */

export function isDate(str) {
  return /\d{2,4}[.\-/]\d{2}[.\-/]\d{2,4}/.test(str);
}

// homework 10 part 2
/* является ли введённая строка Адресом электронной почты. */

export function isEmail(str) {
  const regexp = new RegExp(
    "[da-zа-я.!#$%&'*+-/=?^_`{|}~]+@[a-zа-я-]+.[a-zа-я]+",
    "i"
  );
  return regexp.test(str);
}

// homework 10 part 3
/* является ли введённая строка Номером телефона. */

export function isPhoneNumber(str) {
  const regexp = /^\+?\d\s?\(?\d{3}\)?\s?\d{3}-?\s?\d{1,2}\s?-?\d{1,2}/;
  return regexp.test(str);
}
