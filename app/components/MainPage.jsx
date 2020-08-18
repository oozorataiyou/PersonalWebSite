import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import { Parallax } from 'react-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import {startGetSchools, startGetLanguages, startGetSkills, startGetCerts} from 'actions';

import SchoolWrapper from 'app/components/main/SchoolWrapper';
import LanguageDetails from 'app/components/main/LanguageDetails';
import SkillsDetails from 'app/components/main/SkillsDetails';
import CertificationDetails from 'app/components/main/CertificationDetails';

import LoadingPlaceholder from 'app/components/LoadingPlaceholder';

import {
  faHandPaper,
} from '@fortawesome/pro-solid-svg-icons';
import {
  faCertificate,
  faChevronDown,
  faGlobe,
  faGraduationCap,
  faMicrophoneAlt,
  faMoonStars,
  faPencilAlt,
  faSun,
  faVolumeUp,
} from '@fortawesome/pro-duotone-svg-icons';

const MainPage = ({
  dispatch,
  schools,
  languages,
  skills,
  certifications
}) =>{
  const [sentDispatch, setSentDispatch] = useState(false);
  useEffect(() =>{
    if(sentDispatch === false){ // ensure dispatch is sent only once
      dispatch(startGetSchools());
      dispatch(startGetLanguages());
      dispatch(startGetSkills());
      dispatch(startGetCerts());
      setSentDispatch(true)
    }
    scriptForBootstrap();
  })

  const scriptForBootstrap = () => {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
  const greeting = () => {
    var hour = moment().hours();
    if (hour >= 12 && hour < 18) {
      return "Afternoon";
    } else if (hour >= 18 && hour <= 24) {
      return "Evening";
    } else {
      return "Morning";
    }
  }
  const greetingIcon = () => {
    let hour = moment().hours();
    return <FontAwesomeIcon icon={(hour >= 7 && hour <= 18) ? faSun : faMoonStars} />
  }
  const age = () => moment().diff('1993-09-22', 'years');
  const scrollToIntro = () => document.querySelector("#intro").scrollIntoView({ behavior: "smooth" })

  const SchoolsLoader = LoadingPlaceholder(schools)(SchoolWrapper)
  const SkillsLoader = LoadingPlaceholder(skills)(SkillsDetails)
  const CertificationLoader = LoadingPlaceholder(certifications)(CertificationDetails)
  const LanguagesLoader = LoadingPlaceholder(languages, "tr")(LanguageDetails)

  return (
    <DocumentMeta title="Malcolm's Portfolio">
      <Parallax bgImage={'assets/images/bg/mainPage_01.jpg'} bgImageAlt="a moon" strength={500}>
        <div className="wholePageWithNav" style={{ "color": "white", "textAlign": "center" }}>
          <div>
            <h1 className="neon">Hello</h1>
            <h2 className="neon">
              <Typed strings={[
                  "I'm Malcolm",
                  "I'm a programmer",
                  "I'm a photographer",
                ]}
                typeSpeed={100}
                backSpeed={50}
                loop />
            </h2>
          </div>
          <button type="button" className="btn btn-link" onClick={() => scrollToIntro()}>
            <div className="showMore animated infinite bounce">
              Show More
                <br />
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </button>
        </div>
      </Parallax>
      {/* Self Intro */}
      <section id="intro" className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">{greetingIcon()} Good {greeting()}</h1>
          <p className="lead">Hi, I'm Malcolm, as of today I'm {age()}. I have a passion for programming and photography. During the school holidays or breaks I enjoy picking up something new like programming languages to broaden my knowledge.</p>
        </div>
      </section>
      {/* Education */}
      <section id="education" className="pad container">
        <h1><FontAwesomeIcon icon={faGraduationCap} /> Education</h1>
        <div className="list-group list-group-flush">
          <SchoolsLoader />
        </div>
      </section>
      {/* Skills */}
      <div id="skills" className="pad container-fluid bg-light">
        <div className="container">
          <div className="row">
            <section className="col-md-6 col-sm-12">
              <h1><FontAwesomeIcon icon={faHandPaper} /> Skills</h1>
              <SkillsLoader />
              <div>
                <h3>Legend</h3>
                <span className="badge badge-pill badge-danger mr-3 mb-2 pill-skill" data-toggle="tooltip" data-placement="top" title="Proficiency: 1-4">Basics</span>
                <span className="badge badge-pill badge-warning mr-3 mb-2 pill-skill" data-toggle="tooltip" data-placement="top" title="Proficiency: 5-7">Still ok</span>
                <span className="badge badge-pill badge-success mr-3 mb-2 pill-skill" data-toggle="tooltip" data-placement="top" title="Proficiency: 8-10">Proficient</span>
              </div>
            </section>
            <div className="col-md-6 col-sm-12">
              {/* Certifications */}
              <section id="certs">
                <h1><FontAwesomeIcon icon={faCertificate} /> Certifications</h1>
                <ul className="list-group">
                  <CertificationLoader />
                </ul>
              </section>
              {/* Language */}
              <section id="languages" className="mt-3">
                <h1><FontAwesomeIcon icon={faGlobe} /> Language</h1>
                <table className="table table-hover maxWidthPage">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col"><FontAwesomeIcon icon={faMicrophoneAlt} data-toggle="tooltip" data-placement="top" title="Speak" /></th>
                      <th scope="col"><FontAwesomeIcon icon={faPencilAlt} data-toggle="tooltip" data-placement="top" title="Write" /></th>
                      <th scope="col"><FontAwesomeIcon icon={faVolumeUp} data-toggle="tooltip" data-placement="top" title="Listen" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <LanguagesLoader />
                  </tbody>
                </table>
              </section>
            </div>
          </div>
        </div>
      </div>
    </DocumentMeta>
  )
}

export default connect((state)=>{
  return {
    schools: state.schoolsReducer,
    languages: state.languagesReducer,
    skills: state.skillsReducer,
    certifications: state.certificationsReducer
  }
})(MainPage);
