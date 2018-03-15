import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

export class SchoolCCA extends React.Component{
  render(){
    var {ccas} = this.props;
    var renderDate = () =>{
      var dateFormat = "MMMM YYYY";
      var strTimeTo = (timeTo == 'current') ? timeTo : moment(timeTo).format(dateFormat);
      return `${moment(timeFrom).format(dateFormat)} - ${strTimeTo}`
    }
    var renderCCA = () =>{
      return ccas.map((cca) =>{
        return(<p key={cca.id}>{cca.status} of {cca.club}</p>)
      })
    }

    return(
      <details>
        <summary>CCA</summary>
        {renderCCA()}
      </details>
    )
  }
}
export default SchoolCCA;
