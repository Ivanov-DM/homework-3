import { getSum } from "./index";

describe("Tests for index.js", () => {
  it("is a function", () => {
    expect(typeof getSum).toBe("function");
  });

  it("get sum of 2 numbers", () => {
    expect(getSum(2, 5)).toBe(7);
  });
});
