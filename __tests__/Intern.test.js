const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Nathan', 333, 'nathan.silva@gmail', 'UofA');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Nathan', 333, 'nathan.silva@gmail', 'UofA');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Nathan', 333, 'nathan.silva@gmail.com', 'UofA');

    expect(intern.getRole()).toEqual("Intern");
}); 