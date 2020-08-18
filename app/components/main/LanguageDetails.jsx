import React from 'react';

const LanguageDetails = ({
  details:{
    listen,
    speak,
    write,
    name,
  }
}) =>(
  <tr>
    <th scope="row">{name}</th>
    <td>{speak}</td>
    <td>{write}</td>
    <td>{listen}</td>
  </tr>
)

 export default LanguageDetails;