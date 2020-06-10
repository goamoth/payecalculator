import React, { Component } from 'react';
import '../scss/Form.scss';

class Form extends Component {
   render() {
      return (
         <div className="row form-wrapper">
            <div className="col-12">

               <form className="theForm" onSubmit={ this.props.onSubmit }>
                  <div className="form-group">
                     <label htmlFor="year"> Taxation Year: </label>
                     <select name="year" id="year" className="custom-select" value={this.props.year} onChange={this.props.changeHandler}>
                        <option value="" selected> - Select Year - </option>
                        <option value="2020"> 2020 </option>
                     </select>
                  </div>

                  <div className="form-group">
                     <label htmlFor="grossPay"> Gross Income: </label>
                     <input type="number" className="form-control" id="grossPay" name="grossPay" placeholder="75000" value={this.props.grossPay} onChange={ this.props.changeHandler } />
                  </div>

                  <div className="form-group">
                     <label style={{display: "block"}}> NSSF Contribution: </label>
                     <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" name="nssf" id="old" value="old" checked={this.props.nssf === 'old'} onChange={ this.props.changeHandler } />
                        <label htmlFor="old" className="custom-control-label"> Old (200) </label>
                     </div>
                     <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" name="nssf" id="new" value="new" checked={this.props.nssf === 'new'} onChange={ this.props.changeHandler } />
                        <label htmlFor="new" className="custom-control-label"> New (Tiered) </label>
                     </div>
                  </div>

                  <div className="form-group disability">
                     <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="isExempted" id="isExempted" value="true" checked={this.props.isExempted === 'true'} onChange={ this.props.changeHandler } />
                        <label htmlFor="isExempted" className="custom-control-label"> I have Disability Tax Exemption Certificate </label>
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