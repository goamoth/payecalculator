function calculateNssf(grossPay) {
   // This function is used only to calculate New(tiered) NSSF values. 
   // Old values for all grossPays is 200.

   try {
      let nssf;

      if (!grossPay) {
         return 0;
      } else if (typeof grossPay != 'number') {
         throw new TypeError('grossPay must be of type number!');
      } else if (grossPay <= 18000) {
         nssf = grossPay * 0.06;
      } else {
         nssf = 1080;
      }

      return nssf;

   } catch (e) {
      return `${e.name}: ${e.message}`;
   }

}

export default calculateNssf;