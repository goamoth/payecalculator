import React, { Component } from 'react';

class Form extends Component {
   render() {
      return (
         <div className="row">
            <div className="col-12">

               <form className="theForm">
                  <div className="form-group">
                     <label for="year"> Taxation Year: </label>
                     <select name="year" id="year" className="custom-select">
                        <option value="2020">2020</option>
                     </select>
                  </div>

                  <div className="form-group">
                     <label for="grossPay"> Gross Income: </label>
                     <input type="number" className="form-control" id="grossPay" name="grossPay" placeholder="75000" />
                  </div>

                  <div className="form-group">
                     <label for="nssf" style={{display: "block"}}> NSSF Contribution: </label>
                     <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" name="nssf" id="nssf" value="old" />
                        <label for="nssf" className="custom-control-label"> Old (200) </label>
                     </div>
                     <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" name="nssf" id="nssf" value="new" />
                        <label for="nssf" className="custom-control-label"> New (Tiered) </label>
                     </div>
                  </div>

                  <div className="form-group">
                     <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="isExempted" id="isExempted" />
                        <label for="isExempted" className="custom-control-label"> I have Disability Tax Exemption Certificate </label>
                     </div>
                  </div>

                  <div className="form-group">
                     <button type="submit" className="btn btn-primary">Calculate</button>
                  </div>
               </form>

            </div>
         </div>
      );
   }
}

export default Form;