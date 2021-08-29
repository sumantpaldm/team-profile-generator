const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');



// creating testemployee for testing
const testEmployee = new Employee('abc', '123', 'test@abc.com');




//test for checking the inputs
test('test to check the values (parameters) required', () => {
    expect(testEmployee.name).toBe('abc');
    expect(testEmployee.id).toBe('123');
    expect(testEmployee.email).toBe('test@abc.com');
    
});


//tests for checking the getname, getemail, getid, getrole methods
test('test to check getName method', () => {
    expect(testEmployee.getName()).toBe('abc');
});


test('test to check getId method', () => {
    expect(testEmployee.getId()).toBe('123');
});


test('test to check getEmail method', () => {
    expect(testEmployee.getEmail()).toBe('test@abc.com');
});


test('test to check getRole method', () => {
    expect(testEmployee.getRole()).toBe('Employee');
});





