import React, { Component } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Results from '../components/Results';
import '../scss/Calculator.scss';
import calculateNssf from '../pfunctions/calculateNssf';
import calculatePaye from '../pfunctions/calculatePaye';

class Calculator extends Component {
   constructor(props) {
      super(props);
      this.state = {
         year: '',
         grossPay: 0,
         nssf: '',
         isExempted: false,
         payeCal: {},
         isSubmitted: false
      };
      
      this.resultsRef = React.createRef();
   }

   handleChange = (e) => {
      let name = e.target.name;

      if (e.target.name === 'isExempted') {
         this.setState( (prevState) => {
            let isChecked = prevState.isExempted === false ? true : false;
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
      let nssfValue;
      
      if (this.state.nssf === 'new') {
         nssfValue = calculateNssf(+this.state.grossPay);
      } else {
         nssfValue = 200;
      }

      const payeResults = calculatePaye(+this.state.grossPay, nssfValue, this.state.isExempted);

      if (payeResults) {
         this.setState({
            payeCal: payeResults,
            isSubmitted: true
         });

         this.resultsRef.current.scrollIntoView({ behavior: 'smooth' });

      } else {
         console.log("Oops! Can't compute Paye!");
      }

   };

   render() {
      return (
         <div className="row">
            <div className="col-12 cal-wrapper">
               <Header headerType="h1" headerText="PAYE Calculator" />
               <Form {...this.state} changeHandler={this.handleChange} onSubmit={this.onSubmit} />
            </div>

            <div className="w-100"></div>

            <div className="col-12" ref={this.resultsRef}>
               { this.state.isSubmitted && <Results {...this.state.payeCal} refProps={this.resultsRef} /> }
            </div>
         </div>
      );
   }
}

export default Calculator;