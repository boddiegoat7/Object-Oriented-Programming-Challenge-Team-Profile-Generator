const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("To see if Employee is Engineer", () => {
    const emp = new Engineer();
    expect(typeof emp).toBe("object");
});

test("Constructor to see Engineers name", () => {
    const name = "Victor";
    const emp = new Engineer(name);
    expect(emp.name).toBe(name);
});

test("Constructor to see Engineers id", () => {
    const id = 111;
    const emp = new Engineer("Victor", 111);
    expect(emp.id).toBe(id);
});

test("Constructor to see Engineers email", () => {
    const email = "victorboddie21@gmail.com";
    const emp = new Engineer("Victor", 111, email);
    expect(emp.email).toBe(email);
});

test("Constructor to see Engineers github", () => {
    const github = "mtheofield";
    const emp = new Engineer("Victor", 111, "victorboddie21@gmail.com", github);
    expect(emp.github).toBe(github);
});

test("Constructor to see role", () => {
    const role = "Engineer";
    const emp = new Engineer(
    "victor", 111, "victorboddie21@gmail.com", "boddiegoat7",role);
    expect(emp.role).toBe(role);
});
