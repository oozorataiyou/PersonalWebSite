import React from 'react';

const SkillsDetails = ({
  details: {
    name,
    proficiency,
  }
}) =>{
  const setPillColor = () => {
    if (proficiency >= 8 && proficiency <= 10) {
      return "badge-success"; //Proficient
    } else if (proficiency >= 5) {
      return "badge-warning"; //Still ok
    } else {
      return "badge-danger"; //Basics
    }
  }

  return (
    <span className={`badge badge-pill mr-3 mb-2 pill-skill ${setPillColor()}`} data-toggle="tooltip" data-placement="top" title={`Proficiency: ${proficiency} / 10`}>{name}</span>
  )
}
export default SkillsDetails;
