import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { themes, useTheme } from 'app/theme';
import ProjectRow from 'app/components/main/ProjectRow';

const Project = ({
  dataReducer,
}) => {
  const [theme] = useTheme()
  const currentTheme = themes[theme]
  const [hideExtraRows, setHideExtraRows] = useState(true)

  const renderSchoolsRows = () => {
    if (hideExtraRows === false) {
      return dataReducer.data.map(dataRow => <ProjectRow key={dataRow.id} details={dataRow} />)
    } else {
      return dataReducer.data.map((dataRow, i) => {
        if (i >= 2) { return; }
        return <ProjectRow key={dataRow.id} details={dataRow} />
      })
    }
  }
  const renderButtonText = () => {
    if (hideExtraRows) {
      return (
        <React.Fragment>
          Show more <FontAwesomeIcon icon={['fad', 'chevron-down']} />
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          Show less <FontAwesomeIcon icon={['fad', 'chevron-up']} />
        </React.Fragment>
      )
    }
  }

  return (
    <React.Fragment>
      {renderSchoolsRows()}
      <div className={`list-group-item flex-column align-items-start ${currentTheme.bg}`}>
        <div className="row">
          <div className="col-12">
            <button type="button" className="btn btn-outline-primary btn-block stretched-link" onClick={() => setHideExtraRows(!hideExtraRows)}>{renderButtonText()}</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Project