import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

export class SchoolSubject extends React.Component{
  render(){
    var {subjects} = this.props;

    var firstActive = (number) =>{
      return (number == 1) ? "active" : "";
    }

    var renderList = () =>{
      var count = 0;
      return subjects.map((subject) =>{
        return(<a className={`btn btn-primary ${firstActive(++count)}`} id="list-home-list" key={`${subject.id}_side`} data-toggle="list" href={`#${subject.id}`} role="tab" aria-controls="UOL Year 1">{subject.name}</a>)
      })
    }
    var renderGradesContainer = () =>{
      var count = 0;
      return subjects.map((subject) =>{
        return(
          <div className={`tab-pane fade show ${firstActive(++count)}`} id={subject.id} key={`${subject.id}_grades`} role="tabpanel" aria-labelledby="UOLY1">
            <ul className="list-group">
              {renderGrades(subject.subjects)}
            </ul>
          </div>
        )
      })
    }
    var renderGrades = (subjects) =>{
      return subjects.map((subject) =>{
        return(
          <li className="list-group-item d-flex justify-content-between align-items-center" key={subject.name}>
            {subject.name}
            <span className="badge badge-primary badge-pill">{(subject.grade == "NC") ? "Not Completed Yet" : subject.grade}</span>
          </li>
        )
      })
    }

    return(
      <details>
        <summary>Subjects</summary>
        <div className="row">
          <div className="col-4">
            <div className="list-group" id="UOLContent" role="tablist">
              {renderList()}
            </div>
          </div>
          <div className="col-8">
            <div className="tab-content" id="nav-tabContent">
              {renderGradesContainer()}
            </div>
          </div>
        </div>
      </details>
    )
  }
}
export default SchoolSubject;
