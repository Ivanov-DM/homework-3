import {
  getSumElements,
  createArrWithDoubleValues,
  getMaxAndMinElement,
} from "./hw-5";

describe("tests for homework #5", () => {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const testNotCastArray = [1, 2, 3, 4, "a", "6", 7, 8, "9", 10];

  describe("tests for homework #5 part 1 ", () => {
    it("is a function", () => {
      expect(typeof getSumElements).toBe("function");
    });

    it("logs to console sum of array's elements", () => {
      jest.spyOn(console, "log");
      getSumElements(testArray);
      expect(console.log).toHaveBeenCalledWith("Sum of array's elements = 55");
    });

    it("throws error if argument is not array", () => {
      function getSumElementsTest() {
        getSumElements("Some text");
      }
      expect(getSumElementsTest).toThrowError(new Error("Not array"));
    });

    it("throws error if some array's element don't cast to number", () => {
      function getSumElementsTest() {
        getSumElements(testNotCastArray);
      }
      expect(getSumElementsTest).toThrowError(
        new Error("Some array's element is not a number")
      );
    });

    describe("tests for homework #5 part 2", () => {
      it("is a function", () => {
        expect(typeof createArrWithDoubleValues).toBe("function");
      });

      it("creates new array with doubled values", () => {
        expect(createArrWithDoubleValues(testArray)).toStrictEqual([
          2,
          4,
          6,
          8,
          10,
          12,
          14,
          16,
          18,
          20,
        ]);
      });

      it("throws error if argument is not array", () => {
        function createArrWithDoubleValuesTest() {
          createArrWithDoubleValues("Some text");
        }
        expect(createArrWithDoubleValuesTest).toThrowError(
          new Error("Not array")
        );
      });
    });

    describe("tests for homework #5 part 3", () => {
      it("is a function", () => {
        expect(typeof getMaxAndMinElement).toBe("function");
      });

      it("logs to console max and min array's element", () => {
        jest.spyOn(console, "log");
        getMaxAndMinElement(testArray);
        expect(console.log).toHaveBeenCalledWith(
          "Max element = 10, min element = 1"
        );
      });

      it("throws error if argument is not array", () => {
        function getMaxAndMinElementTest() {
          getMaxAndMinElement("Some text");
        }
        expect(getMaxAndMinElementTest).toThrowError(new Error("Not array"));
      });
    });
  });
});
