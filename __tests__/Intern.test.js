const Intern = require("../lib/Intern");

test(" To set the school ", () => {
    const test = "SUNY PLATTSBURGH";
    const intern = new Intern("victor", 1, "victorboddie21@gmail.com", test);
    expect(intern.school).toBe(test);
});

test(' To see if getPosition() would return "Intern" ', () => {
    const test = "Intern";
    const intern = new Intern("Victor", 1, "victorboodie@gmail.com","SUNY PLATTSBURGH");
    expect(intern.getRole()).toBe(test);
});

test(" To get the school using getSchool() fuction ", () => {
    const test = "SUNY PLATTSBURGH";
    const intern = new Intern("Victor", 1, "victorboodie@gmail.com", test);
    expect(intern.getSchool()).toBe(test);
});
