const Manager = require("../lib/Manager");

test(" Can set office number via constrictor argument", () => {
    const test = 777;
    const manager = new Manager("Victor",777, "victorboodie@gmail.com", test);
    expect(manager.roomLocation).toBe(test);
});

test(' To see if getPosition() would return "Manager"', () => {
    const test = "Manager";
    const manager = new Manager("Victor", 777, "victorboodie@gmail.com", test);
    expect(manager.getRole()).toBe(test);
});

test(" To get office number via getOfficeNumber()", () => {
    const test = 777;
    const manager = new Manager("Victor", 777, "victorboddie21@gmail.com", test);
    expect(manager.getOfficeNumber()).toBe(test);
});
