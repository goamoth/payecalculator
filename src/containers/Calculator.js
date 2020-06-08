import React, { Component } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Results from '../components/Results';
import '../scss/Calculator.scss';

class Calculator extends Component {
   constructor(props) {
      super(props);
      this.state = {
         year: '',
         grossPay: 0,
         nssf: '',
         isExempted: false
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