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

    

})