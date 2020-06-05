import calculatePaye from '../calculatePaye';

describe('calculatePaye', () => {
   it('Returns payeCal object with correct calculations when grossPay, nssf and isExempted (false) arguments', () => {
      let expected = {
         grossPay: 50000,
         nssf: 1080,
         totalDeductions: 1080,
         taxablePay: 48920,
         relief: 2400,
         paye: 4150.65
      };
      let actual = calculatePaye(50000, 1080, false);
      expect(actual).toEqual(expected);
   });

   it('Returns payeCal object with correct calculations when grossPay, nssf and isExempted (true) arguments', () => {
      let expected = {
         grossPay: 185000,
         nssf: 1080,
         totalDeductions: 151080,
         taxablePay: 33920,
         relief: 2400,
         paye: 1488
      };
      let actual = calculatePaye(185000, 1080, true);
      expect(actual).toEqual(expected);
   });

   it('Returns 0 when no param is passed to it', () => {
      let actual = calculatePaye();
      expect(actual).toBe(0);
   });

   it('Returns 0 when grossPay is not given to it', () => {
      let actual = calculatePaye(null, 200, false);
      expect(actual).toBe(0);
   });

   it('Uses isExmpted false when isExemption param is not given', () => {
      let expected = 738;
      let actual = calculatePaye(30000, 1080);
      expect(actual.paye).toEqual(expected);
   });

   it('Returns error if grossPay and nssf args are not of tpeof number', () => {
      let expected = 'TypeError: Wrong argument type(s)';
      let actual = calculatePaye('secret', 1080, false);
      expect(actual).toBe(expected);
   });
});