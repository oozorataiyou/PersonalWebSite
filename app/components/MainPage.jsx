import React from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import { Parallax } from 'react-parallax';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import moment from 'moment';
import Typing from 'react-typing-animation';
import {startGetSchools} from 'actions';
import SchoolWrapper from 'app/components/main/SchoolWrapper';

import faChevronDown from '@fortawesome/fontawesome-pro-regular/faChevronDown';
import faSun from '@fortawesome/fontawesome-pro-regular/faSun';
import faMoon from '@fortawesome/fontawesome-pro-regular/faMoon';
import faGraduationCap from '@fortawesome/fontawesome-pro-solid/faGraduationCap';
import faHandPaper from '@fortawesome/fontawesome-pro-solid/faHandPaper';
import faFileWord from '@fortawesome/fontawesome-pro-solid/faFileWord';
import faFileExcel from '@fortawesome/fontawesome-pro-solid/faFileExcel';
import faFilePowerpoint from '@fortawesome/fontawesome-pro-solid/faFilePowerpoint';
import faCertificate from '@fortawesome/fontawesome-pro-solid/faCertificate';
import faGlobe from '@fortawesome/fontawesome-pro-solid/faGlobe';
import faMicrophoneAlt from '@fortawesome/fontawesome-pro-solid/faMicrophoneAlt';
import faPencilAlt from '@fortawesome/fontawesome-pro-solid/faPencilAlt';
import faVolumeUp from '@fortawesome/fontawesome-pro-solid/faVolumeUp';

import faPhp from '@fortawesome/fontawesome-free-brands/faPhp';
import faNodeJs from '@fortawesome/fontawesome-free-brands/faNodeJs';
import faJsSquare from '@fortawesome/fontawesome-free-brands/faJsSquare';
import faHtml5 from '@fortawesome/fontawesome-free-brands/faHtml5';
import faCss3 from '@fortawesome/fontawesome-free-brands/faCss3';

export class MainPage extends React.Component{
  componentDidMount(){
    var {dispatch} = this.props;
    window.addEventListener('load', this.formLoaded);
    dispatch(startGetSchools());
  }

  formLoaded = () =>{
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });
  }

  render(){
    var {schools} = this.props;
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

    var renderSchools = () =>{
      if (!schools.isLoading){
        if(schools.numberOfSchools != schools.school.length){
          var width = schools.school.length / schools.numberOfSchools * 100;
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
            <div className="showMore animated infinite bounce">
              Show More
              <br />
              <FontAwesomeIcon icon={faChevronDown}/>
            </div>
          </div>
        </Parallax>
        {/* Self Intro */}
        <section className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">{greetingIcon()} Good {greeting()}</h1>
            <p className="lead">Hi, i'm Malcolm, as of today i'm {age()}. I have a passion for programming and photography. During the school holidays or breaks I enjoy picking up something new programming languages to broaden my knowledge.</p>
          </div>
        </section>
        {/* Education */}
        <section className="pad container">
          <h1><FontAwesomeIcon icon={faGraduationCap}/> Education</h1>
          <div className="list-group list-group-flush">
            {renderSchools()}
          </div>
        </section>
        {/* Skills */}
        <div className="pad container-fluid bg-light">
          <div className="container">
            <div className="row">
              <section className="col-md-6 col-sm-12">
                <h1><FontAwesomeIcon icon={faHandPaper}/> Skills</h1>
                {/* Skills - Programming */}
                <div>
                  <span className="badge badge-pill badge-success mr-3 mb-2 pill-skill">MySQL</span>
                  <span className="badge badge-pill badge-success mr-3 mb-2 pill-skill"><FontAwesomeIcon icon={faNodeJs}/> Node.js</span>
                  <span className="badge badge-pill badge-success mr-3 mb-2 pill-skill">Java</span>
                  <span className="badge badge-pill badge-success mr-3 mb-2 pill-skill"><FontAwesomeIcon icon={faPhp}/> PHP</span>
                  <span className="badge badge-pill badge-danger mr-3 mb-2 pill-skill">C</span>
                  <span className="badge badge-pill badge-danger mr-3 mb-2 pill-skill">C++</span>
                  <span className="badge badge-pill badge-warning mr-3 mb-2 pill-skill">Objective C</span>
                  <span className="badge badge-pill badge-warning mr-3 mb-2 pill-skill">Swift</span>
                  <span className="badge badge-pill badge-success mr-3 mb-2 pill-skill"><FontAwesomeIcon icon={faHtml5}/> HTML</span>
                  <span className="badge badge-pill badge-success mr-3 mb-2 pill-skill"><FontAwesomeIcon icon={faCss3}/> CSS</span>
                  <span className="badge badge-pill badge-warning mr-3 mb-2 pill-skill"><FontAwesomeIcon icon={faJsSquare}/> Javascript</span>
                </div>
                {/* Skills - Applications */}
                <div>
                  <span className="badge badge-pill badge-success mr-3 mb-2 pill-skill"><FontAwesomeIcon icon={faFileWord}/> Microsoft Word</span>
                  <span className="badge badge-pill badge-success mr-3 mb-2 pill-skill"><FontAwesomeIcon icon={faFileExcel}/> Microsoft Excel</span>
                  <span className="badge badge-pill badge-warning mr-3 mb-2 pill-skill"><FontAwesomeIcon icon={faFilePowerpoint}/> Microsoft Powerpoint</span>
                </div>
                <div>
                  <h3>Legend</h3>
                  <span className="badge badge-pill badge-success mr-3 mb-2 pill-skill">Proficient</span>
                  <span className="badge badge-pill badge-warning mr-3 mb-2 pill-skill">Still ok</span>
                  <span className="badge badge-pill badge-danger mr-3 mb-2 pill-skill">Basics</span>
                </div>
              </section>
              <div className="col-md-6 col-sm-12">
                {/* Certifications */}
                <section>
                  <h1><FontAwesomeIcon icon={faCertificate}/> Certifications</h1>
                  <ul className="list-group">
                    <li className="list-group-item">MSOS: Microsoft Excel 2010</li>
                  </ul>
                </section>
                {/* Language */}
                <section className="mt-3">
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
                      <tr>
                        <th scope="row">English</th>
                        <td>8</td>
                        <td>8</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <th scope="row">Chinese</th>
                        <td>6</td>
                        <td>2</td>
                        <td>10</td>
                      </tr>
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
  return {schools: state.schoolsReducer}
})(MainPage);
