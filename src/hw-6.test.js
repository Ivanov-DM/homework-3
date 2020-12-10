import { diff, isWord, pow } from "./hw-6";

describe("tests for homework #6", () => {
  describe("tests for homework #6 part 1 ", () => {
    it("is a function", () => {
      expect(typeof diff).toBe("function");
    });

    it("returns different between max and min numbers", () => {
      expect(diff(10, 3)).toBe(7);
    });

    it("same param is string (can cast to number)", () => {
      expect(diff("10", 3)).toBe(7);
    });

    it("trows error if same param is string (can't cast to number)", () => {
      function diffTest() {
        diff("10str", 3);
      }
      expect(diffTest).toThrowError(new Error("Not a number"));
    });
  });

  describe("tests for homework #6 part 2", () => {
    it("is a function", () => {
      expect(typeof isWord).toBe("function");
    });

    it("checking to string contains one word", () => {
      expect(isWord("Java")).toBeTruthy();
    });

    it("checking to string contains not one word", () => {
      expect(isWord("Java Script")).toBeFalsy();
    });

    it("checking to string contains one word and space at the begin", () => {
      expect(isWord(" Java")).toBeTruthy();
    });

    it("checking to string contains one word and space at the end", () => {
      expect(isWord("Java ")).toBeTruthy();
    });
  });

  describe("tests for homework #6 part 3", () => {
    it("is a function", () => {
      expect(typeof pow).toBe("function");
    });

    it("raising number 5 to the power 2", () => {
      expect(pow(5, 2)).toBe(25);
    });

    it("raising number 5 to the power 0", () => {
      expect(pow(5, 0)).toBe(1);
    });

    it("raising negative number 5 to the power 2", () => {
      expect(pow(-5, 3)).toBe(-125);
    });

    it("raising number 5 to the negative power 2", () => {
      expect(pow(5, -2)).toBe(0.04);
    });

    it("raising number 5 to the real power 0.12", () => {
      expect(pow(5, 0.12)).toBe(1.2130435711726304);
    });

    it("raising number 5 to the real negative power 0.12", () => {
      expect(pow(5, -0.12)).toBe(0.8243726967146906);
    });
  });
});
