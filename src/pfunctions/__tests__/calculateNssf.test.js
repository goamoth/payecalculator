import calculateNssf from '../calculateNssf';
import { act } from 'react-dom/test-utils';

describe('calculateNssf', () => {
   it('Returns 6% of all grossPay less than or equal to 18000', () => {
      let expected = 360;
      let actual = calculateNssf(6000);
      expect(actual).toEqual(expected);
   });

   it('Returns 1080 for all grossPay greater than 18000', () => {
      let expected = 1080;
      let actual = calculateNssf(50000);
      expect(actual).toEqual(expected);
   });

   it('Returns 0 if given no arguments', () => {
      expect( calculateNssf() ).toBe(0);
   });

   it('Returns an error if grossPay is not of type number', () => {
      let expected = 'TypeError: grossPay must be of type number!';
      let actual = calculateNssf('hello!');
      expect(actual).toBe(expected);
   });
});