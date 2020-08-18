import React from 'react';

const SchoolCCA = ({ccas}) =>{
  const renderCCA = () => ccas.map((cca) => (<p key={cca.id}>{cca.status} of {cca.club}</p>))

  return (
    <details>
      <summary>CCA</summary>
      {renderCCA()}
    </details>
  )
}
export default SchoolCCA;
