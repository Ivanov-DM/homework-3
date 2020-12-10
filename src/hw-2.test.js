import { getMaxValue, getMonthTitle, isPlaced } from "./hw-2";

describe("tests for homework #2", () => {
  describe("tests for homework #2 part 1 ", () => {
    it("is a function", () => {
      expect(typeof getMaxValue).toBe("function");
    });

    it("logs to console bigger number", () => {
      jest.spyOn(console, "log");
      getMaxValue(5, 10);
      expect(console.log).toHaveBeenCalledWith(
        "Of the numbers 5 and 10 bigger 10"
      );
    });

    it('check if some param is a string which casts to "number"', () => {
      jest.spyOn(console, "log");
      getMaxValue("5", 10);
      expect(console.log).toHaveBeenCalledWith(
        "Of the numbers 5 and 10 bigger 10"
      );
    });

    it("throws if some param contains a character", () => {
      function getMaxValueTest() {
        getMaxValue(1, "Script");
      }
      expect(getMaxValueTest).toThrowError(new Error("Not a number"));
    });
  });

  describe("tests for homework #2 part 2", () => {
    it("is a function", () => {
      expect(typeof getMonthTitle).toBe("function");
    });

    it("logs to console month title", () => {
      const values = ["1"];
      jest.spyOn(window, "prompt").mockImplementation(() => values.shift());
      jest.spyOn(console, "log");
      getMonthTitle();
      expect(console.log).toHaveBeenCalledWith("1 is a January");
    });

    it("logs to console month title if param > 12", () => {
      const values = ["13"];
      jest.spyOn(window, "prompt").mockImplementation(() => values.shift());
      jest.spyOn(console, "log");
      getMonthTitle();
      expect(console.log).toHaveBeenCalledWith("Such month is not exists");
    });

    it("throws if prompt value is not a number", () => {
      const values = ["123str"];
      jest.spyOn(window, "prompt").mockImplementation(() => values.shift());
      expect(getMonthTitle).toThrowError(new Error("Not a number"));
    });
  });

  describe("tests for homework #2 part 3", () => {
    it("is a function", () => {
      expect(typeof isPlaced).toBe("function");
    });

    it("circle (area = 0.6) is placed in square (area = 1)", () => {
      expect(isPlaced(0.6, 1)).toBeTruthy();
    });

    it('check if some param is a string which casts to "number"', () => {
      expect(isPlaced("0.6", 1)).toBeTruthy();
    });

    it("circle (area = 1) is not placed in square (area = 0.6)", () => {
      expect(isPlaced(1, 0.6)).toBeFalsy();
    });

    it("throws if some param is not a number", () => {
      function isFitTest() {
        isPlaced("a", 3);
      }
      expect(isFitTest).toThrowError(new Error("Not a number"));
    });
  });
});
