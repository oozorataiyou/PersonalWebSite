import React from 'react';
import moment from 'moment';

import ListGroupItem from 'app/components/theme/ListGroupItem';

const CertificationDetails = ({
  details: {
    name,
    date,
  }
}) =>{
  const renderDate = () => {
    let dateFormat = "MMMM YYYY";
    console.log("name", date)
    return (!date) ? "" : <div><small className="text-muted">{moment(date.toMillis()).format(dateFormat)}</small></div>;
  }

  return (
    <ListGroupItem>
      {name}
      {renderDate()}
    </ListGroupItem>
  )
}

export default CertificationDetails;