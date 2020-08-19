import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SchoolWrapper from 'app/components/main/SchoolWrapper';

const School = ({
  dataReducer,
})=>{
  const [hideExtraRows, setHideExtraRows] = useState(true)

  const renderSchoolsRows = () =>{
    if (hideExtraRows === false) {
      return dataReducer.data.map(dataRow => <SchoolWrapper key={dataRow.id} details={dataRow} />)
    } else {
      return dataReducer.data.map((dataRow, i) => {
        if (i >= 2) { return; }
        return <SchoolWrapper key={dataRow.id} details={dataRow} />
      })
    }
  }
  const renderButtonText = () =>{
    if(hideExtraRows){
      return(
        <React.Fragment>
          Show more <FontAwesomeIcon icon={['fad', 'chevron-down']} />
        </React.Fragment>
      )
    }else{
      return (
        <React.Fragment>
          Show less <FontAwesomeIcon icon={['fad', 'chevron-up']} />
        </React.Fragment>
      )
    }
  }

  return(
    <React.Fragment>
      {renderSchoolsRows()}
      <div className="list-group-item flex-column align-items-start">
        <div className="row">
          <div className="col-12">
            <button type="button" className="btn btn-outline-primary btn-block" onClick={() => setHideExtraRows(!hideExtraRows)}>{renderButtonText()}</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default School