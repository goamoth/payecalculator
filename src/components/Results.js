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
                        <td> 0 </td>
                     </tr>
                     <tr>
                        <td> NSSF Contribution: </td>
                        <td> 0 </td>
                     </tr>
                     <tr>
                        <td> Total Deduction: </td>
                        <td> 0 </td>
                     </tr>
                     <tr>
                        <td> Taxable Income: </td>
                        <td> 0 </td>
                     </tr>
                     <tr>
                        <td> Personal Relief: </td>
                        <td> 0 </td>
                     </tr>
                     <tr>
                        <td> PAYE: </td>
                        <td> 0 </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      );
   }
}

export default Results;