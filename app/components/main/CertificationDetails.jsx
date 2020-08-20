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
    return (date == 'none') ? "" : <div><small className="text-muted">{moment(date).format(dateFormat)}</small></div>;
  }

  return (
    <ListGroupItem>
      {name}
      {renderDate()}
    </ListGroupItem>
  )
}

export default CertificationDetails;