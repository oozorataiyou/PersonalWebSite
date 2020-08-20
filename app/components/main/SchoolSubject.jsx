import React from 'react';

import ListGroupItem from 'app/components/theme/ListGroupItem';

const SchoolSubject = ({
  id,
  school,
  subjects,
}) =>{
  let firstActive = number => (number == 1) ? "active" : "";

  const renderList = () => {
    let count = 0;
    return subjects.map(subject => (
      <a className={`btn btn-primary mb-1 ${firstActive(++count)}`} id="list-home-list" key={`${subject.id}_side`} data-toggle="list" href={`#${subject.id}`} role="tab" aria-controls={`${school} ${subject.name}`}>{subject.name}</a>
    ))
  }
  const renderGradesContainer = () => {
    let count = 0;
    return subjects.map(subject => (
      <div className={`tab-pane fade show ${firstActive(++count)}`} id={subject.id} key={`${subject.id}_grades`} role="tabpanel" aria-labelledby={`${school} ${subject.name} grades`}>
        <ul className="list-group">
          {renderGrades(subject.subjects)}
        </ul>
      </div>
    ))
  }
  const renderGrades = subjects => {
    return subjects.map(subject => (
      <ListGroupItem classes="d-flex justify-content-between align-items-center" key={`${id}_${subject.name}`}>
        {subject.name}
        <span className="badge badge-primary badge-pill">{(subject.grade == "NC") ? "Not Completed Yet" : subject.grade}</span>
      </ListGroupItem>
    ))
  }

  return (
    <details>
      <summary>Subjects</summary>
      <div className="row">
        <div className="col-4">
          <div className="list-group" id={id} role="tablist">
            {renderList()}
          </div>
        </div>
        <div className="col-8">
          <div className="tab-content" id={`${id}-tabContent`}>
            {renderGradesContainer()}
          </div>
        </div>
      </div>
    </details>
  )
}
export default SchoolSubject;
