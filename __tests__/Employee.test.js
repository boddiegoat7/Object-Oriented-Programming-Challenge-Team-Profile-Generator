const Employee = require("../lib/Employee");
const { it, expect, test } = require("@jest/globals");

test("Settting up employee objects", () => {
  const emp = new Employee();
  expect(typeof emp).toBe("object");
});

test("Constructor for employees name", () => {
  const name = "Victor";
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

test("Constructor for employee id", () => {
  const id = 111;
  const emp = new Employee("Victor", 111);
  expect(emp.id).toBe(id);
});

test("Constructor for employee email", () => {
  const email = "mvictorboddie21@gmail.com";
  const emp = new Employee("victor", 111, email);
  expect(emp.email).toBe(email);
});

test("Constructor for employee role", () => {
  const role = "Employee";
  const emp = new Employee("victor", 111, "victorboddie21@gmail.com", role);
  expect(emp.role).toBe(role);
});
