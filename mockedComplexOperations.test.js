import 'jest';
import * as complexOperations from './complexOperations';
import * as basicOperations from './basicOperations';

describe('complexOperation - Unit tests', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });

    describe('checkEmail', () => {
        it('test if the email is a string', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            expect(complexOperations.checkEmail(1)).toBe('The email should be an string');
        });
        it('test a string with invalid email format', () => {
            jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
            expect(complexOperations.checkEmail('test')).toBe('The email is invalid');
        });
        it('test an email valid', () => {
            jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
            expect(complexOperations.checkEmail('test')).toBe('The email is valid');
        });
    });

    describe('calculateArea', () => {
        it('Test if the figure is supported', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(false);
            expect(complexOperations.calculateArea('hexagone')).toBe('hexagone is not supported');
        });
        it('Test if the N1 and N2 are numbers', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.calculateArea('square', 1, '2')).toBe('number1 and number2 should be numbers');
        });
        it('test the square area with valid numbers', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'multip').mockReturnValue(25);
            expect(complexOperations.calculateArea('square', 5, 5)).toBe(25);
        });
        it('test the rectangle area with valid numbers', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'multip').mockReturnValue(20);
            expect(complexOperations.calculateArea('rectangle', 5, 4)).toBe(20);
        });
        it('test the triangle area with valid numbers', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'division').mockReturnValue(15);
            expect(complexOperations.calculateArea('triangle', 6, 5)).toBe(15);
        });
        it('test the circle area with valid numbers', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'exponent').mockReturnValue(16);
            expect(complexOperations.calculateArea('circle', 4)).toBe(Math.PI * 16);
        });
    });

    describe('sumGratherThan', () => {
        it('test n1, n2 and n3 are not numbers', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.sumGratherThan('1', true, 'B')).toBe('The params should be numbers');
        });
        it('test sum with three numbers', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'sum').mockReturnValue(8);
            expect(complexOperations.sumGratherThan(null, null, 7)).toBe('8 is grather than 7');
        });
        it('test sum with three numbers', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'sum').mockReturnValue(5);
            expect(complexOperations.sumGratherThan(null, null, 7)).toBe('5 is less than 7');
        });
    });

    describe('intersectionBetweenArrays', () => {
        it('test the params are arrays', () =>{
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            expect(complexOperations.intersectionBetweenArrays('1', 2)).toBe('The params should be arrays');
        });
        it('test the arrays without matching elements', () =>{
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            expect(complexOperations.intersectionBetweenArrays(['1', '2'], ['white', 'blue'])).toBe('There are not matching elements');
        });
        it('test the arrays with matching elements', () =>{
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue('3');
            expect(complexOperations.intersectionBetweenArrays(['1', '2', '3'], ['white', 'blue', '3'])).toEqual('3');
        });
    });

    describe('sortArrayOfObjectsByKey', () => {
        it('test the first param is an array', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            expect(complexOperations.sortArrayOfObjectsByKey(25, 'team')).toEqual('The first param should be an array');
        });
        it('test the first param is an array and the second a string', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            expect(complexOperations.sortArrayOfObjectsByKey([{team: 'Rosario Central'}, {team: 'Newells'}], 2)).toEqual('The second param should be an string');
        });
        it('test if all the elements has the team property', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(false)
            expect(complexOperations.sortArrayOfObjectsByKey([{team: 'Rosario Central'}, {team: 'Newells'}, {group: 'foo fighters'}], 'team')).toEqual('Some elements in the array does not have the team property');
        });
        it('test with valid array and key', () => {
            const expectedArray = [{team: 'Rosario Central'}, {team: 'Newells'}, {team: 'Colon'}];

            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(true);
            jest.spyOn(basicOperations, 'sortArrayByKey').mockReturnValue(expectedArray);
            expect(complexOperations.sortArrayOfObjectsByKey([], 'team')).toStrictEqual(expectedArray);
        });
    });

    describe('numberOfOddAndEvenNumbers', () => {
        it('test the param is an array', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            expect(complexOperations.numberOfOddAndEvenNumbers(15)).toEqual('The param should be an array');
        });
        it('test the array have only numbers', () => {
            expect(complexOperations.numberOfOddAndEvenNumbers([25, '48', 32])).toEqual('The array should have only numbers');
        });
        it('test with valid values', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([1, 1, 1]);
            jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([1, 1]);
            expect(complexOperations.numberOfOddAndEvenNumbers([])).toEqual({'even': 2, 'odd': 3});;
        });
    });
})