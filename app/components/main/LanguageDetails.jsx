import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

export class LanguageDetails extends React.Component{
  render(){
    var {id, listen, speak, write, name} = this.props.details;

    return(
      <tr>
        <th scope="row">{name}</th>
        <td>{speak}</td>
        <td>{write}</td>
        <td>{listen}</td>
      </tr>
    )
  }
}
export default LanguageDetails;
