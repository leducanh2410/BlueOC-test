const { getMostFrequentLengthGroups } = require('./task1');

describe('getMostFrequentLengthGroups', () => {
    test('returns group with most frequent length', () => {
        const input = ['a', 'bb', 'cc', 'd', 'ee'];
        expect(getMostFrequentLengthGroups(input)).toEqual([
            ['bb', 'cc', 'ee']
        ]);
    });

    test('returns groups for tied most frequent lengths', () => {
        const input = ['a', 'bb', 'c', 'dd'];
        expect(getMostFrequentLengthGroups(input)).toEqual([
            ['a', 'c'],
            ['bb', 'dd']
        ]);
    });

    test('all strings same length', () => {
        const input = ['aa', 'bb', 'cc'];
        expect(getMostFrequentLengthGroups(input)).toEqual([
            ['aa', 'bb', 'cc']
        ]);
    });

    test('empty input returns empty array', () => {
        expect(getMostFrequentLengthGroups([])).toEqual([]);
    });

    test('all unique lengths', () => {
        const input = ['a', 'bb', 'ccc', 'dddd'];
        expect(getMostFrequentLengthGroups(input)).toEqual([
            ['a'],
            ['bb'],
            ['ccc'],
            ['dddd']
        ]);
    });

    test('handles strings with spaces', () => {
        const input = ['a ', ' b', 'cc', 'dd'];
        // lengths: 2,2,2,2
        expect(getMostFrequentLengthGroups(input)).toEqual([
            ['a ', ' b', 'cc', 'dd']
        ]);
    });
});