const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Nathan', 333, 'nathan.silva@gmail', 7);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Nathan', 333, 'nathan.silva@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 

test('get manager name',() => {
    const manager = new Manager('Nathan', 333, 'nathan.silva@google.com', 7)

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));
});