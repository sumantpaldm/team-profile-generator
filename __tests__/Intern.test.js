const { test } = require('@jest/globals');
const Intern = require('../lib/Intern');


//creating test intern for testing 
const testIntern = new Intern('abc', '123', 'test@abc.com', 'abcschool');


//test for checking the properties
test('test to check the values (parameters) required for Intern', () => {
    expect(testIntern.name).toBe('abc');
    expect(testIntern.id).toBe('123');
    expect(testIntern.email).toBe('test@abc.com');
    expect(testIntern.school).toBe('abcschool');
});


// tests for checking getName, getId, getEmail, getSchool getRole methods

test('test to check the getName() method', () => {
    expect(testIntern.getName()).toBe('abc');
});


test('test to check the getId() method', () => {
    expect(testIntern.getId()).toBe('123');
});


test('test to check the getEmail() method', () => {
    expect(testIntern.getEmail()).toBe('test@abc.com');
});


test('test to check the getSchool() method', () => {
    expect(testIntern.getSchool()).toBe('abcschool');
});


test('test to check the getRole() method', () => {
    expect(testIntern.getRole()).toBe('Intern');
});
