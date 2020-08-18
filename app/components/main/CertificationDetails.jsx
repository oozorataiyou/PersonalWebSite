import React from 'react';
import moment from 'moment';

const CertificationDetails = ({
  details: {
    name,
    date,
  }
}) =>{
  const renderDate = () => {
    let dateFormat = "MMMM YYYY";
    return (date == 'none') ? "" : <div><small className="text-muted">{moment(date).format(dateFormat)}</small></div>;
  }

  return (
    <li className="list-group-item">
      {name}
      {renderDate()}
    </li>
  )
}

export default CertificationDetails;