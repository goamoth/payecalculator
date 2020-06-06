import React, { Component } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import '../scss/Calculator.scss';

class Calculator extends Component {
   render() {
      return (
         <div className="row cal-wrapper">
            <div className="col-12">
               <Header headerType="h1" headerText="PAYE Calculator" />
               <Form />
            </div>
         </div>
      );
   }
}

export default Calculator;