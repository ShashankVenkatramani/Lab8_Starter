// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Phone Pass Case 1', () => {
    expect(functions.isPhoneNumber("408-500-8000")).toBe(true);
});

test('Phone Pass Case 2', () => {
    expect(functions.isPhoneNumber("424-244-4586")).toBe(true);
});

test('Phone Fail Case 1', () => {
    expect(functions.isPhoneNumber("4242444586")).toBe(false);
});

test('Phone Fail Case 2', () => {
    expect(functions.isPhoneNumber("")).toBe(false);
});



test('Email Pass Case 1', () => {
    expect(functions.isEmail("test@test.com")).toBe(true);
});

test('Email Pass Case 2', () => {
    expect(functions.isEmail("abcd@abcd.net")).toBe(true);
});

test('Email Fail Case 1', () => {
    expect(functions.isEmail("abc.com")).toBe(false);
});

test('Email Fail Case 2', () => {
    expect(functions.isEmail("")).toBe(false);
});



test('Strong Password Pass Case 1', () => {
    expect(functions.isStrongPassword("abcd")).toBe(true);
});

test('Strong Password Pass Case 2', () => {
    expect(functions.isStrongPassword("abcdEFGH")).toBe(true);
});

test('Strong Password Fail Case 1', () => {
    expect(functions.isStrongPassword("ab")).toBe(false);
});

test('Strong Password Fail Case 2', () => {
    expect(functions.isStrongPassword("fasdfasdfasdfasdfasdfasdfasdf")).toBe(false);
});



test('Is Date Pass Case 1', () => {
    expect(functions.isDate("12/30/4000")).toBe(true);
});

test('Is Date Pass Case 2', () => {
    expect(functions.isDate("1/30/4000")).toBe(true);
});

test('Is Date Fail Case 1', () => {
    expect(functions.isDate("12/30/400")).toBe(false);
});

test('Is Date Fail Case 2', () => {
    expect(functions.isDate("")).toBe(false);
});



test('Is Hex Color Pass Case 1', () => {
    expect(functions.isHexColor("#FFF")).toBe(true);
});

test('Is Hex Color Pass Case 2', () => {
    expect(functions.isHexColor("#FFFFFF")).toBe(true);
});

test('Is Hex Color Fail Case 1', () => {
    expect(functions.isHexColor("#FFFFF")).toBe(false);
});

test('Is Hex Color Fail Case 2', () => {
    expect(functions.isHexColor("")).toBe(false);
});