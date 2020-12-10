import { isDate, isEmail, isPhoneNumber } from "./hw-10";

describe("Tests for homework #10", () => {
  describe("Tests for part 1", () => {
    it("is a function", () => {
      expect(typeof isDate).toBe("function");
    });

    it("check format date DD.MM.YYYY", () => {
      expect(isDate("01.01.2021")).toBeTruthy();
    });

    it("check format date DD/MM/YYYY", () => {
      expect(isDate("01/01/2021")).toBeTruthy();
    });

    it("check format date YYYY/MM/DD", () => {
      expect(isDate("2021/01/01")).toBeTruthy();
    });

    it("check format date YYYY-MM-DD", () => {
      expect(isDate("2021-01-01")).toBeTruthy();
    });

    it("check wrong format date", () => {
      expect(isDate("01.jun.20")).toBeFalsy();
    });
  });

  describe("Tests for part 2", () => {
    it("is a function", () => {
      expect(typeof isEmail).toBe("function");
    });

    it("checking email", () => {
      expect(isEmail("test@example.ru")).toBeTruthy();
    });

    it("checking email with Uppercase and Lowercase", () => {
      expect(isEmail("Test.Test@example.ru")).toBeTruthy();
    });

    it("checking email in cyrillic", () => {
      expect(isEmail("почта@яндекс.рф")).toBeTruthy();
    });

    it("checking email with spec symbols in user-name", () => {
      expect(isEmail("test!#$%&'\\*+-/=?^_`{|}~@example.ru")).toBeTruthy();
    });
  });

  describe("Tests for part 3", () => {
    it("is a function", () => {
      expect(typeof isPhoneNumber).toBe("function");
    });

    it("checking phone number in format 89991234567", () => {
      expect(isPhoneNumber("89991234567")).toBeTruthy();
    });

    it("checking phone number in format 8 999 1234567", () => {
      expect(isPhoneNumber("8 999 1234567")).toBeTruthy();
    });

    it("checking phone number in format 8 (999) 1234567", () => {
      expect(isPhoneNumber("8 (999) 1234567")).toBeTruthy();
    });

    it("checking phone number in format 8 999 123-45-67", () => {
      expect(isPhoneNumber("8 999 123-45-67")).toBeTruthy();
    });

    it("checking phone number in format 8 (999) 123 45 67", () => {
      expect(isPhoneNumber("8 (999) 123 45 67")).toBeTruthy();
    });

    it("checking phone number in format +7(999) 123-45-67", () => {
      expect(isPhoneNumber("+7(999) 123-45-67")).toBeTruthy();
    });
  });
});
