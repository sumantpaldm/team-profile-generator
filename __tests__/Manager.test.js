const Manager = require('../lib/Manager');


//creating testmanager for testing
const testManager = new Manager('abc', '123', 'test@abc.com', '123456');


//test for checking the inputs
test('test to check the values (parameters) required', () => {
    expect(testManager.name).toBe('abc');
    expect(testManager.id).toBe('123');
    expect(testManager.email).toBe('test@abc.com');
    expect(testManager.officeNmb).toBe('123456');
});



//tests for checking getName, getId, getEmail, getOfficeNmb methods

test('test to check the getName() method', () => {
    expect(testManager.getName()).toBe('abc');
});

test('test to check the getId() method', () => {
    expect(testManager.getId()).toBe('123');
});

test('test to check the getEmail() method', () => {
    expect(testManager.getEmail()).toBe('test@abc.com');
});

test('test to check the getOfficeNumber() method', () => {
    expect(testManager.getOfficeNumber()).toBe('123456');
});

test('test to check the getRole() method', () => {
    expect(testManager.getRole()).toBe('Manager');
});