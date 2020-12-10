import {
  getWeekDay,
  printMinutesSinceBeginningOfTheDay,
  whoIsYounger,
} from "./hw-8";

describe("Tests for homework #8", () => {
  describe("Tests for part 1", () => {
    it("is a function", () => {
      expect(typeof getWeekDay).toBe("function");
    });

    it("logs to console number of week day for date 21.12.2020", () => {
      jest.spyOn(console, "log");
      getWeekDay("21.12.2020");
      expect(console.log).toHaveBeenCalledWith("day of week: 1");
    });

    it("logs to console number of week day for date before 01.01.1970", () => {
      getWeekDay("21.12.2020");
      expect(console.log).toHaveBeenCalledWith("day of week: 1");
    });

    it("check enter a wrong format date 20/12/2020", () => {
      function getWeekDayTest() {
        getWeekDay("20/12/2020");
      }
      expect(getWeekDayTest).toThrowError(new Error("Wrong date format"));
    });

    it("checks enter date as not a string", () => {
      function getWeekDayTest() {
        getWeekDay(20122020);
      }
      expect(getWeekDayTest).toThrowError(new Error("Not a string"));
    });
  });

  describe("Tests for part 2", () => {
    it("is a function", () => {
      expect(typeof printMinutesSinceBeginningOfTheDay).toBe("function");
    });

    it("logs to console minutes since beginning of the day", () => {
      jest.spyOn(console, "log");
      const date = new Date(2020, 12, 4, 20, 56, 20, 300);
      printMinutesSinceBeginningOfTheDay(date);
      expect(console.log).toHaveBeenCalledWith(
        "1256 minutes had gone since beginning of the day"
      );
    });
  });

  describe("Tests for part 3", () => {
    it("is a function", () => {
      expect(typeof whoIsYounger).toBe("function");
    });

    it("logs to console that user 1 is younger", () => {
      jest.spyOn(console, "log");
      whoIsYounger("21.12.2020", "22.12.2020");
      expect(console.log).toHaveBeenCalledWith("Younger is user 1");
    });

    it("logs to console that user 2 is younger", () => {
      jest.spyOn(console, "log");
      whoIsYounger("23.12.2020", "22.12.2020");
      expect(console.log).toHaveBeenCalledWith("Younger is user 2");
    });

    it("check enter a wrong format date 20/12/2020", () => {
      function whoIsYoungerTest() {
        whoIsYounger("21/12/2020", "22.12.2020");
      }
      expect(whoIsYoungerTest).toThrowError(new Error("Wrong date format"));
    });

    it("checks enter date as not a string", () => {
      function whoIsYoungerTest() {
        whoIsYounger(20122020, true);
      }
      expect(whoIsYoungerTest).toThrowError(new Error("Not a string"));
    });
  });
});
