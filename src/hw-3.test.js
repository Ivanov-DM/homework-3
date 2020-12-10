import {
  getSumNumbersOnInterval,
  getMultiplicationTableForNum,
  getAverageOfOddNumbers,
} from "./hw-3";

describe("tests for homework #3", () => {
  describe("tests for homework #3 part 1 ", () => {
    it("is a function", () => {
      expect(typeof getSumNumbersOnInterval).toBe("function");
    });

    it("logs to console sum numbers on interval form 1 to 50", () => {
      jest.spyOn(console, "log");
      getSumNumbersOnInterval(1, 50);
      expect(console.log).toHaveBeenCalledWith(
        "Sum numbers from 1 to 50 is 1275"
      );
    });

    it('check if some param is a string which casts to "number"', () => {
      jest.spyOn(console, "log");
      getSumNumbersOnInterval("1", "50");
      expect(console.log).toHaveBeenCalledWith(
        "Sum numbers from 1 to 50 is 1275"
      );
    });

    it("throws if some param contains a character", () => {
      function getSumNumbersOnIntervalTest() {
        getSumNumbersOnInterval(1, "50Str");
      }
      expect(getSumNumbersOnIntervalTest).toThrowError(
        new Error("Not a number")
      );
    });
  });

  describe("tests for homework #3 part 2", () => {
    it("is a function", () => {
      expect(typeof getMultiplicationTableForNum).toBe("function");
    });

    it("logs to console multiplication table for 7", () => {
      const values = [
        "7 x 1 = 7",
        "7 x 2 = 14",
        "7 x 3 = 21",
        "7 x 4 = 28",
        "7 x 5 = 35",
        "7 x 6 = 42",
        "7 x 7 = 49",
        "7 x 8 = 56",
        "7 x 9 = 63",
        "7 x 10 = 70",
      ];
      jest.spyOn(console, "log");
      getMultiplicationTableForNum(7);
      expect(console.log).toHaveBeenCalledWith(values.join("\n"));
    });

    it("throws if prompt value is not a number", () => {
      function getMultiplicationTableForNumTest() {
        getMultiplicationTableForNum("7Str");
      }
      expect(getMultiplicationTableForNumTest).toThrowError(
        new Error("Not a number")
      );
    });
  });

  describe("tests for homework #3 part 3", () => {
    it("is a function", () => {
      expect(typeof getAverageOfOddNumbers).toBe("function");
    });

    it("logs to console average of odd numbers from 1 to 37", () => {
      const values = ["37"];
      jest.spyOn(window, "prompt").mockImplementation(() => values.shift());
      jest.spyOn(console, "log");
      getAverageOfOddNumbers();
      expect(console.log).toHaveBeenCalledWith(
        "Average of odd numbers from 1 to 37 is 19"
      );
    });

    it("throws if some param is not a number", () => {
      function getAverageOfOddNumbersTest() {
        const values = ["str"];
        jest.spyOn(window, "prompt").mockImplementation(() => values.shift());
        getAverageOfOddNumbers();
      }
      expect(getAverageOfOddNumbersTest).toThrowError(
        new Error("Not a number")
      );
    });
  });
});
