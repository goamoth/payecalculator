function calculatePaye(grossPay, nssf, isExempted) {
   try {
      if (!grossPay && !nssf && !isExempted) {
         return 0;
      }

      if (!grossPay) {
         return 0;
      }

      if (typeof grossPay != 'number' || typeof nssf != 'number') {
         throw new TypeError('Wrong argument type(s)');
      }

      let currentRates = [
         [24000, 0.1],
         [16667, 0.15],
         [16667, 0.2],
         [1, 0.25]
      ];

      let tax = 0, paye = 0, taxablePay = 0, totalDeductions = 0, payeCal = {}, relief = 2400;

      if (isExempted === true && grossPay <= 150000) {
         totalDeductions = grossPay + nssf;
         taxablePay = 0;
      } else if (isExempted === true && grossPay > 150000) {
         totalDeductions = 150000 + nssf;
         taxablePay = grossPay - totalDeductions;
      } else if (grossPay <= 24000) {
         totalDeductions = nssf;
         taxablePay = 0;
      } else {
         totalDeductions = nssf;
         taxablePay = grossPay - totalDeductions;
      }

      // To handle calculations like (151000 - 151080)
      taxablePay = (taxablePay > 0) ? taxablePay : 0;

      if (taxablePay > 0) {
         let tp = taxablePay;

         for (let rate of currentRates) {
            let [mr, r] = rate;
   
            if (tp > mr && mr !== 1) {
               tax += mr * r;
               tp -= mr;
            } else {
               tax += tp * r;
               break;
            }
         }

         paye = +(tax - relief).toFixed(2);
      } else {
         paye = 0;
      }
      
      payeCal = {
         grossPay,
         nssf,
         totalDeductions,
         taxablePay,
         relief,
         paye: paye > 0 ? paye : 0
      };

      return payeCal;

   } catch (e) {
      return `${e.name}: ${e.message}`;
   }
}

export default calculatePaye;