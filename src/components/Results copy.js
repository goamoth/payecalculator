import React, { Component } from 'react';
import Header from './Header';
import '../scss/Results.scss';

class Results extends Component {
   render() {
      return (
         <div className="row results-wrapper" ref={this.props.refProps}>
            <div className="col-12">
               <Header headerType="h3" headerText="Results" />

               <table className="table table-striped">
                  <tbody>
                     <tr>
                        <td> Gross Income: </td>
                        <td> { this.props.grossPay ? (this.props.grossPay).toLocaleString() : 0 } </td>
                     </tr>
                     <tr>
                        <td> NSSF Contribution: </td>
                        <td> { this.props.nssf ? (this.props.nssf).toLocaleString() : 0 } </td>
                     </tr>
                     <tr>
                        <td> Total Deduction: </td>
                        <td> { this.props.totalDeductions ? (this.props.totalDeductions).toLocaleString() : 0 } </td>
                     </tr>
                     <tr>
                        <td> Taxable Income: </td>
                        <td> { this.props.taxablePay ? (this.props.taxablePay).toLocaleString() : 0 } </td>
                     </tr>
                     <tr>
                        <td> Personal Relief: </td>
                        <td> { this.props.relief ? (this.props.relief).toLocaleString() : 0 } </td>
                     </tr>
                     <tr>
                        <td> PAYE: </td>
                        <td> { this.props.paye ? (this.props.paye).toLocaleString() : 0 } </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      );
   }
}

export default Results;