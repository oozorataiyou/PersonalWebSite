import React from 'react';

export default class LanguageDetails extends React.Component{
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
