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
    })
})