// homework 8 part 1
/* Запросите у пользователя дату в формате
ДД.ММ.ГГГГ. Напишите программу, выводящую день
недели по введённой дате. */

export function getWeekDay(date) {
  if (typeof date !== "string") {
    throw new Error("Not a string");
  }
  const dateTemplate = /\d{2}\.\d{2}\.\d{4}/;
  if (dateTemplate.test(date)) {
    const rightFormatDate = date.split(".").reverse().join("-");
    const userDate = new Date(rightFormatDate);
    console.log(`day of week: ${userDate.getDay()}`);
  } else {
    throw new Error("Wrong date format");
  }
}

// homework 8 part 2
/* Написать программу, которая выводит в консоль
количество минут, прошедшее с начала сегодняшнего
дня. */

export function printMinutesSinceBeginningOfTheDay(date) {
  console.log(
    `${
      date.getHours() * 60 + date.getMinutes()
    } minutes had gone since beginning of the day`
  );
}

// homework 8 part 3
/* *В двух переменных хранятся даты рождения двух
пользователей в формате ДД.ММ.ГГГГ. Написать
программу, которая определяет более молодого
пользователя. */

export function whoIsYounger(date1, date2) {
  if (typeof date1 !== "string" && typeof date2 !== "string") {
    throw new Error("Not a string");
  }
  const dateTemplate = /\d{2}\.\d{2}\.\d{4}/;
  if (dateTemplate.test(date1) && dateTemplate.test(date2)) {
    const rightFormatDate1 = date1.split(".").reverse().join("-");
    const rightFormatDate2 = date2.split(".").reverse().join("-");
    const dateUser1 = new Date(rightFormatDate1);
    const dateUser2 = new Date(rightFormatDate2);
    console.log(`Younger is ${dateUser1 < dateUser2 ? "user 1" : "user 2"}`);
  } else {
    throw new Error("Wrong date format");
  }
}
