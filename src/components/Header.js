import React, { Component } from 'react';
import '../scss/Header.scss';

class Header extends Component {
   render() {
      let header;
      let headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

      if (!this.props.headerType && !this.props.headerText) {
         header = React.createElement('h1', { className: 'default-heading' }, "I'm a Default Header!");

      } else if (!this.props.headerType || !this.props.headerText) {
         header = React.createElement('h4', { className: 'error' }, 'Error: one props is missing!');

      } else if (!headings.includes(this.props.headerType)) {
         header = React.createElement('h4', { className: 'error' }, 'Error: headerType props must be a string and valid HTML heading tag!');

      } else if (typeof this.props.headerText != 'string') {
         header = React.createElement('h4', { className: 'error' }, 'Error: headerText props must be a string!');

      } else {
         header = React.createElement(this.props.headerType, { className: 'normal-heading' }, this.props.headerText);
      }
      
      return (
         <div className="row">
            <div className="col-12">
               {header}
            </div>
         </div>
      );
   }
}

export default Header;