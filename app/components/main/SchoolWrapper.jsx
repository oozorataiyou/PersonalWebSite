import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import SchoolSubject from 'app/components/main/SchoolSubject'
import SchoolCCA from 'app/components/main/SchoolCCA';

export class SchoolWrapper extends React.Component{
  render(){
    var {id, cert, grade, logo, name, timeFrom, timeTo = 'current', subjects, ccas} = this.props;
    var renderDate = () =>{
      var dateFormat = "MMMM YYYY";
      var strTimeTo = (timeTo == 'current') ? timeTo : moment(timeTo).format(dateFormat);
      return `${moment(timeFrom).format(dateFormat)} - ${strTimeTo}`
    }
    var renderSubjects = () =>{
      return (<SchoolSubject subjects={subjects} />)
    }
    var renderCCA = () =>{
      return(
        (ccas.length >= 1) ? <SchoolCCA ccas={ccas} /> : <p className="invisible"/>
      )
    }

    return(
      <div className="list-group-item flex-column align-items-start">
        <div className="row">
          <div className="col-xl-1 col-lg-2 col-md-3 col-sm-4 col-12">
            <img src={logo} alt={`${name} logo`} className="img-thumbnail rounded float-left mr-3 schoolLogo"/>
          </div>
          <div className="col-xl-11 col-lg-10 col-md-9 col-sm-8 col-12">
            <div className="d-flex justify-content-between">
              <h5 className="mb-1">{name}</h5>
              <small>{grade}</small>
            </div>
            <p className="mb-1">{cert}</p>
            <small>{renderDate()}</small>
            {renderSubjects()}
            {renderCCA()}
          </div>
        </div>
      </div>
    )
  }
}
export default SchoolWrapper;
