const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Nathan', 333, 'nathan.silv@gmail.com');

    expect(employee.name).toBe(employee.name);
    expect(employee.id).toBe(employee.id);
    expect(employee.email).toBe(employee.email);
});

test('gets employee name', () => {
    const employee = new Employee('Nathan', 333, 'nathan.silv@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('get employee ID', () => {
    const employee = new Employee('Nathan', 333, 'nathan.silv@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Nathan', 333, 'nathan.silv@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
    const employee = new Employee('Nathan', 333, 'nathan.silv@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});

