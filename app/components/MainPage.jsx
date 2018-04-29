import React from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import { Parallax } from 'react-parallax';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import moment from 'moment';
import Typing from 'react-typing-animation';
import {startGetSchools, startGetLanguages, startGetSkills, startGetCerts} from 'actions';

import SchoolWrapper from 'app/components/main/SchoolWrapper';
import LanguageDetails from 'app/components/main/LanguageDetails';
import SkillsDetails from 'app/components/main/SkillsDetails';
import CertificationDetails from 'app/components/main/CertificationDetails';

import faChevronDown from '@fortawesome/fontawesome-pro-regular/faChevronDown';
import faSun from '@fortawesome/fontawesome-pro-regular/faSun';
import faMoon from '@fortawesome/fontawesome-pro-regular/faMoon';
import faGraduationCap from '@fortawesome/fontawesome-pro-solid/faGraduationCap';
import faHandPaper from '@fortawesome/fontawesome-pro-solid/faHandPaper';
import faCertificate from '@fortawesome/fontawesome-pro-solid/faCertificate';
import faGlobe from '@fortawesome/fontawesome-pro-solid/faGlobe';

import faMicrophoneAlt from '@fortawesome/fontawesome-pro-solid/faMicrophoneAlt';
import faPencilAlt from '@fortawesome/fontawesome-pro-solid/faPencilAlt';
import faVolumeUp from '@fortawesome/fontawesome-pro-solid/faVolumeUp';

export class MainPage extends React.Component{
  componentDidMount(){
    var {dispatch} = this.props;
    window.addEventListener('load', this.scriptForBootstrap());
    dispatch(startGetSchools());
    dispatch(startGetLanguages());
    dispatch(startGetSkills());
    dispatch(startGetCerts());
  }

  componentDidUpdate(){
    this.scriptForBootstrap();
  }

  scriptForBootstrap = () =>{
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  render(){
    var {schools, languages, skills, certifications} = this.props;
    var meta = {
      title: "Home"
    }

    var greeting = () =>{
      var hour = moment().hours();
      if (hour >=12 && hour <18){
        return "Afternoon";
      }else if (hour >= 18 && hour <=24){
        return "Evening";
      }else{
        return "Morning";
      }
    }

    var greetingIcon = () =>{
      var hour = moment().hours();
      return <FontAwesomeIcon icon={(hour >= 7 && hour <=18) ? faSun : faMoon} />
    }

    var age = () =>{
      return moment().diff('1993-09-22', 'years');
    }

    var calculateProgress = (current, total) =>{
      return current/total * 100;
    }

    var renderSchools = () =>{
      if (schools.length == 0) {
        return;
      }

      if (!schools.isLoading){
        if(schools.size != schools.school.length){
          var width = calculateProgress(schools.school.length, schools.size);
          return(
            <div className="progress">
              <div className="progress-bar" style={{width: width+'%'}} role="progressbar" aria-valuenow={width} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          )
        }else{
          return schools.school.map((school) =>{
            return(<SchoolWrapper key={school.id} {...school} />)
          })
        }
      }else{
        return(
          <div className="progress">
            <div className="progress-bar" style={{width: 0}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        )
      }
    }

    var renderLanguages = () =>{
      if (languages.length == 0) {
        return;
      }

      if (!languages.isLoading){
        if(languages.size != languages.languages.length){
          var width = calculateProgress(languages.languages.length, languages.size);
          return(
            <tr>
              <td colSpan="4">
                <div className="progress">
                  <div className="progress-bar" style={{width: width+'%'}} role="progressbar" aria-valuenow={width} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </td>
            </tr>
          )
        }else{
          return languages.languages.map((language) =>{
            return(<LanguageDetails key={language.id} details={language} />)
          })
        }
      }else{
        return(
          <tr>
            <td colSpan="4">
              <div className="progress">
                <div className="progress-bar" style={{width: 0}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </td>
          </tr>
        )
      }
    }

    var renderSkills = () =>{
      if (skills.length == 0) {
        return;
      }

      if (!skills.isLoading){
        if(skills.size != skills.skills.length){
          var width = calculateProgress(skills.skills.length, skills.size);
          return(
            <div className="progress">
              <div className="progress-bar" style={{width: width+'%'}} role="progressbar" aria-valuenow={width} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          )
        }else{
          return skills.skills.map((skill) =>{
            return(<SkillsDetails key={skill.id} details={skill} />)
          })
        }
      }else{
        return(
          <div className="progress">
            <div className="progress-bar" style={{width: 0}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        )
      }
    }

    var renderCertifications = () =>{
      if (certifications.length == 0) {
        return;
      }

      if (!certifications.isLoading){
        if(certifications.size != certifications.cert.length){
          var width = calculateProgress(certifications.cert.length, certifications.size);
          return(
            <div className="progress">
              <div className="progress-bar" style={{width: width+'%'}} role="progressbar" aria-valuenow={width} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          )
        }else{
          return certifications.cert.map((certification) =>{
            return(<CertificationDetails key={certification.id} details={certification} />)
          })
        }
      }else{
        return(
          <div className="progress">
            <div className="progress-bar" style={{width: 0}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        )
      }
    }

    return(
      <DocumentMeta {...meta}>
        <Parallax bgImage={'assets/images/bg/mainPage_01.jpg'} bgImageAlt="the cat" strength={200} className="maxHeightPageWithNav">
          <div className="wholePageWithNav" style={{"color":"white", "textAlign":"center"}}>
            <div>
              <h1 className="neon">Hello</h1>
              <h2 className="neon">
                <Typing loop={true} speed={100} startDelay={500}>
                  <span>I'm Malcolm</span>
                  <Typing.Backspace count={7} delay={3000} />
                  <span>{age()}</span>
                  <Typing.Backspace count={2} delay={3000} />
                  <span>a programmer</span>
                  <Typing.Backspace count={12} delay={3000} />
                  <span>a photographer</span>
                  <Typing.Backspace count={18} delay={3000} />
                </Typing>
              </h2>
            </div>
            <a href="#intro">
              <div className="showMore animated infinite bounce">
                Show More
                <br />
                <FontAwesomeIcon icon={faChevronDown}/>
              </div>
            </a>
          </div>
        </Parallax>
        {/* Self Intro */}
        <section id="intro" className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">{greetingIcon()} Good {greeting()}</h1>
            <p className="lead">Hi, i'm Malcolm, as of today i'm {age()}. I have a passion for programming and photography. During the school holidays or breaks I enjoy picking up something new programming languages to broaden my knowledge.</p>
          </div>
        </section>
        {/* Education */}
        <section id="education" className="pad container">
          <h1><FontAwesomeIcon icon={faGraduationCap}/> Education</h1>
          <div className="list-group list-group-flush">
            {renderSchools()}
          </div>
        </section>
        {/* Skills */}
        <div id="skills" className="pad container-fluid bg-light">
          <div className="container">
            <div className="row">
              <section className="col-md-6 col-sm-12">
                <h1><FontAwesomeIcon icon={faHandPaper}/> Skills</h1>
                {renderSkills()}
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
                  <h1><FontAwesomeIcon icon={faCertificate}/> Certifications</h1>
                  <ul className="list-group">
                    {renderCertifications()}
                  </ul>
                </section>
                {/* Language */}
                <section id="languages" className="mt-3">
                  <h1><FontAwesomeIcon icon={faGlobe}/> Language</h1>
                  <table className="table table-hover maxWidthPage">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col"><FontAwesomeIcon icon={faMicrophoneAlt} data-toggle="tooltip" data-placement="top" title="Speak" /></th>
                        <th scope="col"><FontAwesomeIcon icon={faPencilAlt} data-toggle="tooltip" data-placement="top" title="Write"/></th>
                        <th scope="col"><FontAwesomeIcon icon={faVolumeUp} data-toggle="tooltip" data-placement="top" title="Listen"/></th>
                      </tr>
                    </thead>
                    <tbody>
                      {renderLanguages()}
                    </tbody>
                  </table>
                </section>
              </div>
            </div>
          </div>
        </div>
        {/* <section className="pad container invisible">
          <h1><FontAwesomeIcon icon={faHandPaper}/> Skills</h1>
        </section> */}
      </DocumentMeta>
    )
  }
}

export default connect((state)=>{
  return {
    schools: state.schoolsReducer,
    languages: state.languagesReducer,
    skills: state.skillsReducer,
    certifications: state.certificationsReducer
  }
})(MainPage);
