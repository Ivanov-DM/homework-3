import { getSum, getMult, getSumOfChair, getSumOfDigitInNumber } from "./hw-1";

describe("tests for homework #1", () => {
  describe("tests for homework #1 part 1 ", () => {
    it("is a function", () => {
      expect(typeof getSum).toBe("function");
    });

    it("logs to console sum of 2 numbers", () => {
      jest.spyOn(console, "log");
      getSum(5, 10);
      expect(console.log).toHaveBeenCalledWith("5 + 10 = 15");
    });

    it("throws if some param in function getSum is not a number", () => {
      function getSumTest() {
        getSum(1, "Script");
      }
      expect(getSumTest).toThrowError(new Error("Not a number"));
    });

    it("is a function", () => {
      expect(typeof getMult).toBe("function");
    });

    it("logs to console multiplication of 2 numbers", () => {
      jest.spyOn(console, "log");
      getMult(5, 10);
      expect(console.log).toHaveBeenCalledWith("5 * 10 = 50");
    });

    it("throws if some param in function getMult is not a number", () => {
      function getMultTest() {
        getMult(1, "Script");
      }
      expect(getMultTest).toThrowError(new Error("Not a number"));
    });
  });

  describe("tests for homework #1 part 2", () => {
    it("is a function", () => {
      expect(typeof getSumOfChair).toBe("function");
    });

    it("logs to console sum of chairs from 2 strings", () => {
      jest.spyOn(console, "log");
      getSumOfChair("Java", "Script");
      expect(console.log).toHaveBeenCalledWith(
        '"Java" and "Script" contains 10 chairs'
      );
    });

    it("throws if some param is not a string", () => {
      function getSumOfChairTest() {
        getSumOfChair(1, "Script");
      }
      expect(getSumOfChairTest).toThrowError(new Error("Not a string"));
    });
  });

  describe("tests for homework #1 part 3", () => {
    it("is a function", () => {
      expect(typeof getSumOfDigitInNumber).toBe("function");
    });

    it("logs to console sum of digits from prompt values", () => {
      const values = ["123"];
      jest.spyOn(window, "prompt").mockImplementation(() => values.shift());
      jest.spyOn(console, "log");
      getSumOfDigitInNumber();
      expect(console.log).toHaveBeenCalledWith(
        "Sum of digit from number 123 = 6"
      );
    });

    it("throws if prompt value is not a number", () => {
      const values = ["123str"];
      jest.spyOn(window, "prompt").mockImplementation(() => values.shift());
      expect(getSumOfDigitInNumber).toThrowError(new Error("Not a number"));
    });
  });
});
