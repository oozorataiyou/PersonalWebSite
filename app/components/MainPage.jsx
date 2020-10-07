import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Parallax } from 'react-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import {startGetSchools, startGetLanguages, startGetSkills, startGetCerts} from 'actions';

import School from 'app/components/main/School';
import LanguageDetails from 'app/components/main/LanguageDetails';
import SkillsDetails from 'app/components/main/SkillsDetails';
import CertificationDetails from 'app/components/main/CertificationDetails';

import { themes, useTheme } from 'app/theme';
import LoadingPlaceholder from 'app/components/LoadingPlaceholder';
import Table from 'app/components/theme/Table';

const MainPage = ({
  dispatch,
  schools,
  languages,
  skills,
  certifications
}) =>{
  const [sentDispatch, setSentDispatch] = useState(false);
  const [theme] = useTheme()
  const currentTheme = themes[theme]

  useEffect(() =>{
    if(sentDispatch === false){ // ensure dispatch is sent only once
      window.addEventListener('load', scriptForBootstrap());
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
    let hour = moment().hours();
    if (hour >= 12 && hour < 18) {
      return "Afternoon";
    } else if (hour >= 18 && hour <= 24) {
      return "Evening";
    } else {
      return "Morning";
    }
  }
  const parallaxBg = () =>{
    let hour = moment().hours();
    switch ((hour >= 17 && hour < 20) ? "evening" : theme){
      case "light": return "v1602031709/portfolio/mainpage_light_t3blhz"
      case "dark": return "v1602031717/portfolio/mainpage_dark_mrdxit"
      default: return "v1602031718/portfolio/mainpage_evening_jc9cen"
    }
  }
  const greetingIcon = () => {
    let hour = moment().hours();
    return <FontAwesomeIcon icon={['fad', (hour >= 7 && hour <= 18) ? 'sun' : 'moon-stars']} />
  }
  const age = () => moment().diff('1993-09-22', 'years');
  const scrollToIntro = () => document.querySelector("#intro").scrollIntoView({ behavior: "smooth" })

  const SchoolsLoader = LoadingPlaceholder(schools, false)(School)
  const SkillsLoader = LoadingPlaceholder(skills)(SkillsDetails)
  const CertificationLoader = LoadingPlaceholder(certifications)(CertificationDetails)
  const LanguagesLoader = LoadingPlaceholder(languages, true, "tr")(LanguageDetails)

  return (
    <React.Fragment>
      <Parallax bgImage={`https://res.cloudinary.com/malcolmchew/image/upload/${parallaxBg()}.png`} bgImageAlt="a moon" strength={500}>
        <div className="wholePageWithNav d-flex justify-content-between flex-column p-3" style={{ "color": "white", "textAlign": "center" }}>
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
          <button type="button" className="btn btn-link showMore" onClick={() => scrollToIntro()}>
            <div className="animated infinite bounce">
              Show More
                <br />
              <FontAwesomeIcon icon={['fad', 'chevron-down']} />
            </div>
          </button>
        </div>
      </Parallax>
      {/* Self Intro */}
      <section id="intro" className={`jumbotron jumbotron-fluid mb-0 ${currentTheme.jumbotron} ${currentTheme.text}`}>
        <div className="container">
          <h1 className="display-4">{greetingIcon()} Good {greeting()}</h1>
          <p className="lead">Hi, I'm Malcolm, as of today I'm {age()}. I have a passion for programming and photography. During the school holidays or breaks I enjoy picking up something new like programming languages to broaden my knowledge.</p>
        </div>
      </section>
      {/* Education */}
      <section id="education" className={`py-5 container ${currentTheme.bg} ${currentTheme.text}`}>
        <h1><FontAwesomeIcon icon={['fad', 'graduation-cap']} /> Education</h1>
        <div className="list-group list-group-flush">
          <SchoolsLoader />
        </div>
      </section>
      {/* Skills */}
      <div id="skills" className={`py-5 container-fluid ${currentTheme.secondary} ${currentTheme.text}`}>
        <div className="container">
          <div className="row">
            <section className="col-md-6 col-sm-12">
              <h1><FontAwesomeIcon icon={['fas', 'hand-paper']} /> Skills</h1>
              <SkillsLoader />
              <div>
                <h3>Legend</h3>
                <span className="badge badge-pill badge-danger mr-3 mb-2 pill-skill" data-toggle="tooltip" data-placement="top" title="Proficiency: 1-4">Basics</span>
                <span className="badge badge-pill badge-warning mr-3 mb-2 pill-skill" data-toggle="tooltip" data-placement="top" title="Proficiency: 5-7">Average</span>
                <span className="badge badge-pill badge-success mr-3 mb-2 pill-skill" data-toggle="tooltip" data-placement="top" title="Proficiency: 8-10">Proficient</span>
              </div>
            </section>
            <div className="col-md-6 col-sm-12">
              {/* Certifications */}
              <section id="certs">
                <h1><FontAwesomeIcon icon={['fad', 'certificate']} /> Certifications</h1>
                <ul className="list-group">
                  <CertificationLoader />
                </ul>
              </section>
              {/* Language */}
              <section id="languages" className="mt-3">
                <h1><FontAwesomeIcon icon={['fad', 'globe']} /> Language</h1>
                <Table classes="table-hover w-100">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col"><FontAwesomeIcon icon={['fad', 'microphone-alt']} data-toggle="tooltip" data-placement="top" title="Speak" /></th>
                      <th scope="col"><FontAwesomeIcon icon={['fad', 'pencil-alt']} data-toggle="tooltip" data-placement="top" title="Write" /></th>
                      <th scope="col"><FontAwesomeIcon icon={['fad', 'volume-up']} data-toggle="tooltip" data-placement="top" title="Listen" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <LanguagesLoader />
                  </tbody>
                </Table>
              </section>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default connect((state)=>{
  return {
    schools: state.schoolsReducer,
    languages: state.languagesReducer,
    skills: state.skillsReducer,
    certifications: state.certificationsReducer,
    theme: state.themeReducer,
  }
})(MainPage);
