const { test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');


//creating test engineer fot testing.
const testEngineer = new Engineer('abc', '123', 'test@abc.com', 'username');


//test for checking the properties
test('test to check the values (parameters) required for Engineer', () => {
    expect(testEngineer.name).toBe('abc');
    expect(testEngineer.id).toBe('123');
    expect(testEngineer.email).toBe('test@abc.com');
    expect(testEngineer.username).toBe('username');
});




//test for checking the getname, getemail, getid, getrole, getGithub methods
test('test to check the getName() method', () => {
    expect(testEngineer.getName()).toBe('abc');
});


test('test to check the getId() method', () => {
    expect(testEngineer.getId()).toBe('123');
});


test('test to check the getEmail() method', () => {
    expect(testEngineer.getEmail()).toBe('test@abc.com');
});


test('test to check the getGithub() method', () => {
    expect(testEngineer.getGithub()).toBe('username');
});


test('test to check the getRole() method', () => {
    expect(testEngineer.getRole()).toBe('Engineer');
});



