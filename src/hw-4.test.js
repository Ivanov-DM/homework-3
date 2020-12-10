import { addField, createAdmin, getVariableFromObj } from "./hw-4";

describe("tests for homework #4", () => {
  let user;
  let admin;

  beforeAll(() => {
    user = {
      name: "John",
    };
  });

  describe("tests for homework #4 part 1 ", () => {
    it("is a function", () => {
      expect(typeof addField).toBe("function");
    });

    it('add prompt value in field "age" object user', () => {
      const values = ["20"];
      jest.spyOn(window, "prompt").mockImplementation(() => values.shift());
      addField(user, "age");
      expect(user.age).toBe(20);
    });

    it('add field "age" for object user', () => {
      const values = ["20"];
      jest.spyOn(window, "prompt").mockImplementation(() => values.shift());
      addField(user, "age");
      expect.objectContaining({
        name: expect.any(String),
        age: expect.any(Number),
      });
    });

    it("throws if prompt value is not a number", () => {
      const values = ["str"];
      jest.spyOn(window, "prompt").mockImplementation(() => values.shift());
      function addFieldTest() {
        addField(user, "age");
      }
      expect(addFieldTest).toThrowError(new Error("Not a number"));
    });
  });

  describe("tests for homework #4 part 2", () => {
    it("is a function", () => {
      expect(typeof createAdmin).toBe("function");
    });

    it("creates a copy of object user with new field", () => {
      createAdmin(user);
      expect.objectContaining({
        name: expect.any(String),
        age: expect.any(Number),
        role: expect.any(String),
      });
    });

    it("check that function returned object ", () => {
      expect(createAdmin()).toBeInstanceOf(Object);
    });

    it("checks field value by copy object", () => {
      admin = createAdmin(user);
      expect(admin.name).toBe("admin");
      expect(admin.role).toBe("admin");
    });
  });

  describe("tests for homework #4 part 3", () => {
    it("is a function", () => {
      expect(typeof getVariableFromObj).toBe("function");
    });

    it("logs to console all object properties as variable with value", () => {
      const values = ["name = admin", "age = 20", "role = admin"];
      jest.spyOn(console, "log");
      getVariableFromObj(admin);
      expect(console.log).toHaveBeenCalledWith(values.join("\n"));
    });
  });
});
