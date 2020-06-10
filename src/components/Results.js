import React, { Component } from 'react';
import Header from './Header';
import '../scss/Results.scss';

class Results extends Component {
   render() {
      return (
         <div className="row results-wrapper">
            <div className="col-12">
               <Header headerType="h3" headerText="Results" />

               <table className="table table-striped">
                  <tbody>
                     <tr>
                        <td> Gross Income: </td>
                        <td> { this.props.grossPay } </td>
                     </tr>
                     <tr>
                        <td> NSSF Contribution: </td>
                        <td> { this.props.nssf } </td>
                     </tr>
                     <tr>
                        <td> Total Deduction: </td>
                        <td> { this.props.totalDeductions } </td>
                     </tr>
                     <tr>
                        <td> Taxable Income: </td>
                        <td> { this.props.taxablePay } </td>
                     </tr>
                     <tr>
                        <td> Personal Relief: </td>
                        <td> { this.props.relief } </td>
                     </tr>
                     <tr>
                        <td> PAYE: </td>
                        <td> { this.props.paye } </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      );
   }
}

export default Results;