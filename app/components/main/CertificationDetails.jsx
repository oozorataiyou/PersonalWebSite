import React from 'react';
import moment from 'moment';

export default class CertificationDetails extends React.Component{
  render(){
    var {id, name, date = "none"} = this.props.details;
    var renderDate = () =>{
      var dateFormat = "MMMM YYYY";
      return (date == 'none') ? "" : <div><small className="text-muted">{moment(date).format(dateFormat)}</small></div>;
    }

    return(
      <li className="list-group-item">
        {name}
        {renderDate()}
      </li>
    )
  }
}
