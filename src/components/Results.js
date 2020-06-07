import React, { Component } from 'react';
import Header from './Header';

class Results extends Component {
   render() {
      return (
         <div className="row results-wrapper">
            <div className="col-12">
               <Header headerType="h2" headerText="Results" />

               <table className="table"></table>
            </div>
         </div>
      );
   }
}

export default Results;