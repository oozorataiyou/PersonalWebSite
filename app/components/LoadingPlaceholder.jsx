import React from "react";

const LoadingPlaceholder = (dataReducer, embed = false) => WrappedComponent =>{
  const LoadingPlaceholderClass = () =>{
    const calculateProgress = (current, total) => current / total * 100;
    const progressBar = width =>(
      <div className="progress">
        <div className="progress-bar" style={{ width: width + '%' }} role="progressbar" aria-valuenow={width} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    )
    const progressBarView = width =>{
      if (embed === false){
        return progressBar(width)
      }

      if(embed == "tr"){
        return(
          <tr>
            <td colSpan="4">
              {progressBar(width)}
            </td>
          </tr>
        )
      }
    }

    const emptyView = () =>{
      if (embed === false){
        return <div className="d-none"></div>
      }

      if (embed == "tr"){
        return(
          <tr className="d-none"><td colSpan="4"></td></tr>
        )
      }
    }

    const view = () => {
      if (dataReducer.length == 0) {
        return emptyView()
      }

      if (!dataReducer.isLoading) {
        if (dataReducer.size != dataReducer.data.length) {
          let width = calculateProgress(dataReducer.data.length, dataReducer.size);
          return progressBarView(width)
        } else {
          return dataReducer.data.map(dataRow => {
            return (<WrappedComponent key={dataRow.id} details={dataRow} />)
          })
        }
      } else {
        return progressBarView(0)
      }
    }
    return view()
  }

  return LoadingPlaceholderClass
}

export default LoadingPlaceholder;