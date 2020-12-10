import { createForm } from "./hw-7";

describe("tests for homework #7", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
  });
  describe("tests for homework #7 part 1 ", () => {
    it("is a function", () => {
      expect(typeof createForm).toBe("function");
    });

    it("creates basic form", () => {
      createForm(el);
      const input = el.querySelector("input");
      const button = el.querySelector("button");
      const paragraphs = el.querySelectorAll("p");
      expect(input).not.toBeNull();
      expect(button).not.toBeNull();
      expect(button.hidden).toBeTruthy();
      expect(button.innerText).toBe("Add");
      expect(el.querySelectorAll("p").length).toBe(3);
      for (let i = 0; i < paragraphs.length; i++) {
        expect(paragraphs[i].innerText).toBe("Some text");
      }
    });

    it("hides button if input field is empty", () => {
      createForm(el);
      const input = el.querySelector("input");
      const button = el.querySelector("button");
      expect(button.hidden).toBeTruthy();
      const text = `${Math.random()  }`;
      input.value = text;
      input.dispatchEvent(new window.Event("keyup"));
      expect(button.hidden).toBeFalsy();
    });

    it("adds new p on click by button", () => {
      createForm(el);
      const input = el.querySelector("input");
      const text = `${Math.random()  }`;
      input.value = text;
      input.dispatchEvent(new window.Event("keyup"));
      const button = el.querySelector("button");
      button.dispatchEvent(new window.Event("click"));
      expect(input.value).toBe("");
      expect(el.querySelectorAll("p").length).toBe(4);
      expect(el.querySelectorAll("p")[3].innerText).toBe(text);
    });

    it("has limited number of paragraphs", () => {
      createForm(el);
      const input = el.querySelector("input");
      for (let i = 0; i < 5; i++) {
        const text = `${Math.random()  }`;
        input.value = text;
        input.dispatchEvent(new window.Event("keyup"));
        const button = el.querySelector("button");
        button.dispatchEvent(new window.Event("click"));

        if (i > 1) {
          expect(el.querySelectorAll("p").length).toBe(5);
          expect(el.querySelectorAll("p")[4].innerText).toBe(text);
        }
      }
    });
  });
});
