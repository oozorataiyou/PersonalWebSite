import React from 'react';
import moment from 'moment';
import SchoolSubject from 'app/components/main/SchoolSubject';
import SchoolCCA from 'app/components/main/SchoolCCA';

const SchoolWrapper = ({
  details: {
    id,
    cert,
    grade,
    logo,
    name,
    timeFrom,
    timeTo = 'current',
    subjects,
    ccas,
  }
}) =>{
  const renderDate = () => {
    let dateFormat = "MMMM YYYY";
    let strTimeTo = (timeTo == 'current') ? timeTo : moment.unix(timeTo.seconds).format(dateFormat);
    return `${moment.unix(timeFrom.seconds).format(dateFormat)} - ${strTimeTo}`
  }
  const renderSubjects = () => <SchoolSubject subjects={subjects} id={id} school={name} />
  const renderCCA = () => (ccas.length >= 1) ? <SchoolCCA ccas={ccas} /> : <p className="d-none" />

  return (
    <div className="list-group-item flex-column align-items-start">
      <div className="row">
        <div className="col-xl-1 col-lg-2 col-md-3 col-sm-4 col-12">
          <img src={logo} alt={`${name} logo`} className="img-thumbnail rounded float-left mr-3 schoolLogo" />
        </div>
        <div className="col-xl-11 col-lg-10 col-md-9 col-sm-8 col-12">
          <div className="d-flex justify-content-between">
            <h5 className="mb-1">{name}</h5>
            <small><span className="badge badge-primary">{grade}</span></small>
          </div>
          <p className="mb-1">{cert}</p>
          <small className="text-muted">{renderDate()}</small>
          {renderSubjects()}
          {renderCCA()}
        </div>
      </div>
    </div>
  )
}

export default SchoolWrapper;