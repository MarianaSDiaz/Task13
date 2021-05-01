import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it('First test for checkEmail', () => {
      expect(complexOperations.checkEmail(1)).toBe('The email should be an string');
    });
    it('Second test for checkEmail', () => {
      expect(complexOperations.checkEmail('Maru')).toBe('The email is invalid');
    });
    it('Third test for checkEmail', () => {
      expect(complexOperations.checkEmail('maru@gmail.com')).toBe('The email is valid');
    });
  });

  describe('calculateArea', () => {
    it('first test for calculateArea', () => {
      expect(complexOperations.calculateArea('Hexagone', 5, 2)).toBe('Hexagone is not supported');
    });
    it('second test for calculateArea', () => {
      expect(complexOperations.calculateArea('square', '5', 2)).toBe('number1 and number2 should be numbers');
    });
    it('third test for calculateArea', () => {
        expect(complexOperations.calculateArea('square', 5, 5)).toBe(25);
    });
    it('fourth test for calculateArea', () => {
      expect(complexOperations.calculateArea('rectangle', 5, 6)).toBe(30);
    });
    it('fifth test for calculateArea', () => {
      expect(complexOperations.calculateArea('triangle', 3, 10)).toBe(15);
    });
    it('sixth test for calculateArea', () => {
      expect(complexOperations.calculateArea('circle', 5)).toBe(78.53981633974483);
    });
  });

  describe('sumGratherThan', () => {
    it('first test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan('3', 5, 2)).toBe('The params should be numbers');
    });
    it('second test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan(16, 35, 42)).toBe('51 is grather than 42');
    });
    it('third test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan(6, 35, 42)).toBe('41 is less than 42');
    });
  });

  describe('intersectionBetweenArrays', () => {
    it('first test for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays(['awita', 'sobre', 'tu', 'cuerpo'], 'a bailar')).toEqual('The params should be arrays');
    });
    it('second test for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays(['awita', 'sobre', 'tu', 'cuerpo'], ['como', 'te', 'quiero'])).toEqual('There are not matching elements');
    });
    it('third test for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays(['awita', 'sobre', 'tu', 'cuerpo'], ['awita', 'como', 'te', 'quiero'])).toEqual(['awita']);
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('first test for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(25, 'team')).toEqual('The first param should be an array');
    });
    it('second test for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{team: 'Rosario Central'}, {team: 'Newells'}], 2)).toEqual('The second param should be an string');
    });
    it('third test for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{team: 'Rosario Central'}, {team: 'Newells'}, {group: 'foo fighters'}], 'team')).toEqual('Some elements in the array does not have the team property');
    });
    it('third test for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{team: 'Rosario Central'}, {team: 'Newells'}], 'team')).toEqual([{"team": 'Newells'}, {"team": 'Rosario Central'}]);
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('first test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(15)).toEqual('The param should be an array');
    });
    it('second test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([25, '48', 32])).toEqual('The array should have only numbers');
    });
    it('third test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([25, 32, 48, 53, 67])).toEqual({'even': 2, 'odd': 3});
    });
  });
});