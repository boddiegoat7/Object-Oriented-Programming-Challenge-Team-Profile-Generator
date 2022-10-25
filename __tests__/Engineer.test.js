const Engineer = require("../lib/Engineer");

test("Can setup GitHub account via constructor", () => {
  const test = "GitHubUser";
  const engineer = new Engineer("Victor", 1, "test@test.com", test);
  expect(engineer.github).toBe(test);
});

test('getRole() should return "Engineer"', () => {
  const test = "Engineer";
  const engineer = new Engineer("Victor", 1, "victorboodie@gmail.com", "GitHubUser");
  expect(engineer.getRole()).toBe(test);
});

test("Can get GitHub username via getGithub()", () => {
  const test = "GitHubUser";
  const engineer = new Engineer("Victor", 1, "victorboodie@gmail.com", test);
  expect(engineer.getGithub()).toBe(test);
});