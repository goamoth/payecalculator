import React, { Component } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Results from '../components/Results';
import '../scss/Calculator.scss';

class Calculator extends Component {
   constructor(props) {
      super(props);
      this.state = {
         grossPay: 0,
         nssf: 0,
         totalDeductions: 0,
         taxablePay: 0,
         relief: 0,
         paye: 0
      };
      
   }

   render() {
      return (
         <div className="row">
            <div className="col-12 cal-wrapper">
               <Header headerType="h1" headerText="PAYE Calculator" />
               <Form />
            </div>

            <div className="w-100"></div>

            <div className="col-12">
               <Results />
            </div>
         </div>
      );
   }
}

export default Calculator;