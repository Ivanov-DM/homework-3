import {
  isRightTriangle,
  printCircumferenceAndCircleArea,
  printRootsOfQuadraticEquation,
} from "./hw-9";

describe("Tests for homework #9", () => {
  describe("Tests for part 1", () => {
    it("is a function", () => {
      expect(typeof isRightTriangle).toBe("function");
    });

    it("check triangle (a = 3, b = 4, c = 5) is a right triangle", () => {
      expect(isRightTriangle(3, 4, 5)).toBeTruthy();
    });

    it("check triangle (a = 4, b = 4, c = 5) is not a right triangle", () => {
      expect(isRightTriangle(4, 4, 5)).toBeFalsy();
    });

    it("throws error if some param is not a number", () => {
      function isRightTriangleTest() {
        isRightTriangle("3s", 4, 5);
      }
      expect(isRightTriangleTest).toThrowError(new Error("Not a number"));
    });
  });

  describe("Tests for part 2", () => {
    it("is a function", () => {
      expect(typeof printCircumferenceAndCircleArea).toBe("function");
    });

    it("logs to console circumference and circle area if R = 3", () => {
      jest.spyOn(console, "log");
      printCircumferenceAndCircleArea(3);
      expect(console.log).toHaveBeenCalledWith(
        "r = 3, circumference = 18.8496, circle area = 28.2743"
      );
    });

    it("logs to console circumference and circle area if R is negative", () => {
      function printCircumferenceAndCircleAreaTest() {
        printCircumferenceAndCircleArea(-3);
      }
      expect(printCircumferenceAndCircleAreaTest).toThrowError(
        new Error("R must be positive")
      );
    });
  });

  describe("Tests for part 3", () => {
    it("is a function", () => {
      expect(typeof printRootsOfQuadraticEquation).toBe("function");
    });

    it("logs to console roots of quadratic equation if D > 0", () => {
      jest.spyOn(console, "log");
      printRootsOfQuadraticEquation(1, -8, 12);
      expect(console.log).toHaveBeenCalledWith("root 1 = 2, root 2 = 6");
    });

    it("logs to console roots of quadratic equation if D < 0", () => {
      jest.spyOn(console, "log");
      printRootsOfQuadraticEquation(5, 3, 7);
      expect(console.log).toHaveBeenCalledWith("No roots");
    });

    it("logs to console roots of quadratic equation if D = 0", () => {
      jest.spyOn(console, "log");
      printRootsOfQuadraticEquation(1, -6, 9);
      expect(console.log).toHaveBeenCalledWith("root = 3");
    });
  });
});
