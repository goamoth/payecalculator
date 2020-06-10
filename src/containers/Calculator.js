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
         isExempted: 'false'
      };
      
   }

   handleChange = (e) => {
      let name = e.target.name;

      if (e.target.name === 'isExempted') {
         this.setState( (prevState) => {
            let isChecked = prevState.isExempted === 'false' ? 'true' : 'false';
            return {
               isExempted: isChecked
            }
         });

      } else {
         this.setState({
            [name]: e.target.value
         });
      }

   };

   onSubmit = (e) => {
      e.preventDefault();
      alert('Hola! Am now on the parent Component!');
   };

   render() {
      return (
         <div className="row">
            <div className="col-12 cal-wrapper">
               <Header headerType="h1" headerText="PAYE Calculator" />
               <Form {...this.state} changeHandler={this.handleChange} onSubmit={this.onSubmit} />
            </div>

            <div className="w-100"></div>

            <div className="col-12">
               <Results {...this.state} />
            </div>
         </div>
      );
   }
}

export default Calculator;