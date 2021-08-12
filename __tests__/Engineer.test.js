const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Nathan', 333, 'nathan.silva@gmail.com', 'PacSmack');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Nathan', 333, 'nathan.silva@gmail.com', 'PacSmack');

    expect(engineer.getRole()).toEqual("Engineer");
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Nathan', 333, 'nathan.silva@gmail.com', 'PacSmack');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

