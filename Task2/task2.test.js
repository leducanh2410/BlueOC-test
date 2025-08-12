const {sumOfTopTwoNumbers} = require('./task2');

describe('sumOfTopTwoNumbers', () => {
    test('returns sum of two largest numbers', () => {
        const input = [1, 2, 3, 4, 5];
        expect(sumOfTopTwoNumbers(input)).toBe(9);
    });

    test('throws error for array with less than two numbers', () => {
        expect(() => sumOfTopTwoNumbers([1])).toThrow("Array must contain at least two numbers");
    });

    test('handles negative numbers', () => {
        const input = [-1, -2, -3, -4];
        expect(sumOfTopTwoNumbers(input)).toBe(-3);
    });

    test('handles mixed positive and negative numbers', () => {
        const input = [-1, 2, 3, -4];
        expect(sumOfTopTwoNumbers(input)).toBe(5);
    });
});