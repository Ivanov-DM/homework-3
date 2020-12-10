/*
Сверстать страницу и подключить к ней файл со
скриптом. На странице должны быть три текстовых
параграфа, поле ввода и кнопка. Напишите скрипт,
который будет выполнять следующие условия:
 */

// let el = document.getElementById('form');

export function createForm(el) {
  const input = document.createElement("input");
  const button = document.createElement("button");
  button.innerText = "Add";
  button.hidden = true;
  el.appendChild(input);
  el.appendChild(button);
  for (let i = 0; i < 3; i++) {
    const p = document.createElement("p");
    p.innerText = "Some text";
    el.appendChild(p);
  }

  // homework 7 part 1
  /* Кнопка скрыта, если в поле ввода нет значения. */

  input.addEventListener("keyup", () => {
    button.hidden = input.value === "";
  });

  // homework 6 part 2
  /* При клике на кнопку добавляется новый параграф,
содержащий текст из поля ввода. */

  button.addEventListener("click", () => {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = input.value;
    input.value = "";
    el.appendChild(newParagraph);

    // homework 6 part 3
    /* Если параграфов становится больше 5, первый из
них удаляется. */

    const paragraphs = el.getElementsByTagName("p");
    if (paragraphs.length > 5) {
      paragraphs[0].remove();
    }
  });
}

// createForm(el);
