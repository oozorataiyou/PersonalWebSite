import React from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import { Parallax } from 'react-parallax';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import moment from 'moment';

import faChevronDown from '@fortawesome/fontawesome-pro-regular/faChevronDown';
import faBook from '@fortawesome/fontawesome-pro-solid/faBook';
import faHandPaper from '@fortawesome/fontawesome-pro-solid/faHandPaper';
import faFileWord from '@fortawesome/fontawesome-pro-solid/faFileWord';
import faFileExcel from '@fortawesome/fontawesome-pro-solid/faFileExcel';
import faFilePowerpoint from '@fortawesome/fontawesome-pro-solid/faFilePowerpoint';
import faPhp from '@fortawesome/fontawesome-free-brands/faPhp';
import faNodeJs from '@fortawesome/fontawesome-free-brands/faNodeJs';
import faJsSquare from '@fortawesome/fontawesome-free-brands/faJsSquare';
import faHtml5 from '@fortawesome/fontawesome-free-brands/faHtml5';
import faCss3 from '@fortawesome/fontawesome-free-brands/faCss3';

export class MainPage extends React.Component{
  render(){
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

    var age = () =>{
      return moment().diff('1993-09-22', 'years');
    }

    return(
      <DocumentMeta {...meta}>
        <Parallax bgImage={'assets/images/bg/mainPage_01.jpg'} bgImageAlt="the cat" strength={200} className="maxHeightPageWithNav">
          <div className="wholePageWithNav" style={{"color":"white", "textAlign":"center"}}>
            <div>
              <div id="neon_border" className="animated infinite flash"></div>
              <div id="neon_blocker"></div>
              <h1 className="neon">Hello</h1>
              <h2 className="neon">I'm Malcolm</h2>
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
            <h1 className="display-4">Good {greeting()}</h1>
            <p className="lead">Hi, i'm Malcolm, as of today i'm {age()}. I have a passion for programming and photography. During the school holidays or reaks I enjoy picking up something new programming languages to broaden my knowledge.</p>
          </div>
        </section>
        {/* Education */}
        <section className="pad container">
          <h1><FontAwesomeIcon icon={faBook}/> Education</h1>
          <div className="list-group list-group-flush">
            {/* Education - UOL */}
            <div className="list-group-item flex-column align-items-start">
              <div className="row">
                <div className="col-xl-1 col-lg-2 col-md-3 col-sm-4 col-12">
                  <img src="https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/559560_10150743004428058_482805069_n.jpg?oh=f8e66ba47f1fc0537c6f6643c6cfc77f&oe=5B1C65BC" alt="Univerity of Lodon International programmes logo" className="img-thumbnail rounded float-left mr-3 schoolLogo"/>
                </div>
                <div className="col-xl-11 col-lg-10 col-md-9 col-sm-8 col-12">
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-1">University of London</h5>
                    <small>Not Completed</small>
                  </div>
                  <p className="mb-1">
                    Bachelor of Science (Honours) in Computing and Information Systems
                  </p>
                  <small>September 2017 - Current</small>
                  <div className="clearfix"/>
                  <details>
                    <summary>Subjects</summary>
                    <div className="row">
                      <div className="col-4">
                        <div className="list-group" id="UOLContent" role="tablist">
                          <a className="btn btn-primary active" id="list-home-list" data-toggle="list" href="#UOLY1Content" role="tab" aria-controls="UOL Year 1">Year 1</a>
                          <a className="btn btn-primary invisible" id="UOLY2" data-toggle="list" href="#UOLY2Content" role="tab" aria-controls="UOL Year 2">Year 2</a>
                          <a className="btn btn-primary invisible" id="UOLY3" data-toggle="list" href="#UOLY3Content" role="tab" aria-controls="UOL Year 3">Year 3</a>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="tab-content" id="nav-tabContent">
                          <div className="tab-pane fade show active" id="UOLY1Content" role="tabpanel" aria-labelledby="UOLY1">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Database Systems
                                <span className="badge badge-primary badge-pill">Not Completed Yet</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Graphical Object-Oriented and Internet Programming in Java
                                <span className="badge badge-primary badge-pill">Not Completed Yet</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Information Systems- Foundations of E-Business
                                <span className="badge badge-primary badge-pill">Not Completed Yet</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Mathematics for Computing
                                <span className="badge badge-primary badge-pill">Not Completed Yet</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade invisible" id="UOLY2Content" role="tabpanel" aria-labelledby="UOLY2">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Cras justo odio
                                <span className="badge badge-primary badge-pill">14</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Dapibus ac facilisis in
                                <span className="badge badge-primary badge-pill">2</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Morbi leo risus
                                <span className="badge badge-primary badge-pill">1</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade invisible" id="UOLY3Content" role="tabpanel" aria-labelledby="UOLY3">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Cras justo odio
                                <span className="badge badge-primary badge-pill">14</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Dapibus ac facilisis in
                                <span className="badge badge-primary badge-pill">2</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Morbi leo risus
                                <span className="badge badge-primary badge-pill">1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
            {/* Education - Ngee Ann Poly */}
            <div className="list-group-item flex-column align-items-start">
              <div className="row">
                <div className="col-xl-1 col-lg-2 col-md-3 col-sm-4 col-12">
                  <img src="https://s3-media3.fl.yelpcdn.com/bphoto/SmvRFbO5u0UJedDa63gwYA/o.jpg" alt="Ngee Ann Polytechnic logo" className="img-thumbnail rounded float-left mr-3 schoolLogo"/>
                </div>
                <div className="col-xl-11 col-lg-10 col-md-9 col-sm-8 col-12">
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-1">Ngee Ann Polytechnic</h5>
                    <small>2.9343</small>
                  </div>
                  <p className="mb-1">
                    Diploma in Information Technology
                  </p>
                  <small>April 2012 - March 2015</small>
                  <div className="clearfix"/>
                  <details>
                    <summary>Subjects</summary>
                    <div className="row">
                      <div className="col-4">
                        <div className="list-group" id="NgeeAnnPolyContent" role="tablist">
                          <a className="btn btn-primary active" id="list-home-list" data-toggle="list" href="#NgeeAnnPolyY1Content" role="tab" aria-controls="NgeeAnnPoly Year 1">Year 1</a>
                          <a className="btn btn-primary" id="list-home-list" data-toggle="list" href="#NgeeAnnPolyY1.5Content" role="tab" aria-controls="NgeeAnnPoly Year 1.5">Year 1.5</a>
                          <a className="btn btn-primary" id="NgeeAnnPolyY2" data-toggle="list" href="#NgeeAnnPolyY2Content" role="tab" aria-controls="NgeeAnnPoly Year 2">Year 2</a>
                          <a className="btn btn-primary" id="NgeeAnnPolyY2.5" data-toggle="list" href="#NgeeAnnPolyY2.5Content" role="tab" aria-controls="NgeeAnnPoly Year 2.5">Year 2.5</a>
                          <a className="btn btn-primary" id="NgeeAnnPolyY3" data-toggle="list" href="#NgeeAnnPolyY3Content" role="tab" aria-controls="NgeeAnnPoly Year 3">Year 3</a>
                          <a className="btn btn-primary" id="NgeeAnnPolyY3.5" data-toggle="list" href="#NgeeAnnPolyY3.5Content" role="tab" aria-controls="NgeeAnnPoly Year 3.5">Year 3.5</a>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="tab-content" id="nav-tabContent">
                          <div className="tab-pane fade show active" id="NgeeAnnPolyY1Content" role="tabpanel" aria-labelledby="NgeeAnnPolyY1">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Computing and Operating Systems
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Computing in Society
                                <span className="badge badge-primary badge-pill">C+</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Computing Mathematics
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Fundalmentals For IT Professionals
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Fundalmentals of Programming
                                <span className="badge badge-primary badge-pill">A+</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Idea Jumpstart
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="NgeeAnnPolyY1.5Content" role="tabpanel" aria-labelledby="NgeeAnnPolyY1.5">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                English Language and Comtemporary Issues
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Enterprise Information Systems
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Networking Fundalmentals
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Object-Oriented Programming
                                <span className="badge badge-primary badge-pill">A+</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                User Interface Design
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="NgeeAnnPolyY2Content" role="tabpanel" aria-labelledby="NgeeAnnPolyY2">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Databases
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Developing Web Applications
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Introduction to Social Psychology
                                <span className="badge badge-primary badge-pill">C+</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Mobile Application Development
                                <span className="badge badge-primary badge-pill">A+</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Object Oriented Analysis and Design
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="NgeeAnnPolyY2.5Content" role="tabpanel" aria-labelledby="NgeeAnnPolyY2.5">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Advanced Mobbile Applications Development
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Advanced Oject-Oriented Analysis and Design
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Digital Forensics
                                <span className="badge badge-primary badge-pill">C+</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Project Management
                                <span className="badge badge-primary badge-pill">C+</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Understanding Relationships: Love and Sexuality
                                <span className="badge badge-primary badge-pill">D+</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="NgeeAnnPolyY3Content" role="tabpanel" aria-labelledby="NgeeAnnPolyY3">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Ethical Hacking
                                <span className="badge badge-primary badge-pill">F</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Mobile Device Decurity and Forensics
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Moile Robotics
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Technopreneurship
                                <span className="badge badge-primary badge-pill">C+</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Windows Application Development
                                <span className="badge badge-primary badge-pill">B+</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                World Issues: A Singapore Perspective
                                <span className="badge badge-primary badge-pill">C+</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="NgeeAnnPolyY3.5Content" role="tabpanel" aria-labelledby="NgeeAnnPolyY3.5">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                4-Month Internship (Project)
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Wireless Technology
                                <span className="badge badge-primary badge-pill">C+</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
            {/* Education - ITE */}
            <div className="list-group-item flex-column align-items-start">
              <div className="row">
                <div className="col-xl-1 col-lg-2 col-md-3 col-sm-4 col-12">
                  <img src="https://pbs.twimg.com/profile_images/2867941654/16f7a391863e47b54e06772b63459393_400x400.jpeg" alt="Institute of Technical Education logo" className="img-thumbnail rounded float-left mr-3 schoolLogo"/>
                </div>
                <div className="col-xl-11 col-lg-10 col-md-9 col-sm-8 col-12">
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-1">Institute of Technical Education</h5>
                    <small>3.439</small>
                  </div>
                  <p className="mb-1">
                    Higher National ITE Certificate in Information Technology
                  </p>
                  <small>April 2010 - March 2012</small>
                  <div className="clearfix"/>
                  <details>
                    <summary>Subjects</summary>
                    <div className="row">
                      <div className="col-4">
                        <div className="list-group" id="ITEContent" role="tablist">
                          <a className="btn btn-primary active" id="list-home-list" data-toggle="list" href="#ITEY1Content" role="tab" aria-controls="ITE Year 1">Year 1</a>
                          <a className="btn btn-primary" id="list-home-list" data-toggle="list" href="#ITEY1.5Content" role="tab" aria-controls="ITE Year 1.5">Year 1.5</a>
                          <a className="btn btn-primary" id="ITEY2" data-toggle="list" href="#ITEY2Content" role="tab" aria-controls="ITE Year 2">Year 2</a>
                          <a className="btn btn-primary" id="ITEY2.5" data-toggle="list" href="#ITEY2.5Content" role="tab" aria-controls="ITE Year 2.5">Year 2.5</a>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="tab-content" id="nav-tabContent">
                          <div className="tab-pane fade show active" id="ITEY1Content" role="tabpanel" aria-labelledby="ITEY1">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Multimedia Essentials
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Computer Maintenance and Operating Systems
                                <span className="badge badge-primary badge-pill">BB</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="ITEY1.5Content" role="tabpanel" aria-labelledby="ITEY1.5">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Life Skills For Personal Development
                                <span className="badge badge-primary badge-pill">Very Good</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Sports and Wellness I
                                <span className="badge badge-primary badge-pill">S</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Computing Mathematics and Programming
                                <span className="badge badge-primary badge-pill">Distinction</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Networking Technology
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="ITEY2Content" role="tabpanel" aria-labelledby="ITEY2">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Life Skills at the Workplace
                                <span className="badge badge-primary badge-pill">GOOD</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Mobile App;ications Programming
                                <span className="badge badge-primary badge-pill">Distinction</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Web Applications Development
                                <span className="badge badge-primary badge-pill">Distinction</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Interactive Applications Development
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="ITEY2.5Content" role="tabpanel" aria-labelledby="ITEY2.5">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Sports and Wellness II
                                <span className="badge badge-primary badge-pill">S</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Essentials of Java Programming
                                <span className="badge badge-primary badge-pill">Distinction</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Industry Attachment
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Multimedia Development
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                  <details>
                    <summary>CCA</summary>
                    <p>Executive Committee of PC Servicing and Networking Club</p>
                  </details>
                </div>
              </div>
            </div>
            {/* Education - Peirce Secondary School */}
            <div className="list-group-item flex-column align-items-start">
              <div className="row">
                <div className="col-xl-1 col-lg-2 col-md-3 col-sm-4 col-12">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Peirce_Secondary_School_Logo.png" alt="Peirce Seconday School logo" className="img-thumbnail rounded float-left mr-3 schoolLogo"/>
                </div>
                <div className="col-xl-11 col-lg-10 col-md-9 col-sm-8 col-12">
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-1">Peirce Seconday School</h5>
                    <small>14</small>
                  </div>
                  <p className="mb-1">
                    Singapore-Cambridge General Certificate of Education Normal(Academic) Level (GCE 'N' Level)
                  </p>
                  <small>January 2006 - November 2009</small>
                  <div className="clearfix"/>
                  <details>
                    <summary>Subjects</summary>
                    <div className="row">
                      <div className="col-4">
                        <div className="list-group" id="PeirceContent" role="tablist">
                          <a className="btn btn-primary invisible" id="list-home-list" data-toggle="list" href="#PeirceY1Content" role="tab" aria-controls="Peirce Year 1">Year 1</a>
                          <a className="btn btn-primary invisible" id="PeirceY2" data-toggle="list" href="#PeirceY2Content" role="tab" aria-controls="Peirce Year 2">Year 2</a>
                          <a className="btn btn-primary invisible" id="PeirceY3" data-toggle="list" href="#PeirceY3Content" role="tab" aria-controls="Peirce Year 3">Year 3</a>
                          <a className="btn btn-primary invisible" id="PeirceY4" data-toggle="list" href="#PeirceY4Content" role="tab" aria-controls="Peirce Year 4">Year 4</a>
                          <a className="btn btn-primary active" id="PeirceNLevel" data-toggle="list" href="#PeirceNLevelContent" role="tab" aria-controls="Peirce N Level">GCE 'N' Level</a>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="tab-content" id="nav-tabContent">
                          <div className="tab-pane fade invisible" id="PeirceY1Content" role="tabpanel" aria-labelledby="PeirceY1">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Cras justo odio
                                <span className="badge badge-primary badge-pill">14</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade invisible" id="PeirceY2Content" role="tabpanel" aria-labelledby="PeirceY2">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Cras justo odio
                                <span className="badge badge-primary badge-pill">14</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade invisible" id="PeirceY3Content" role="tabpanel" aria-labelledby="PeirceY3">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Cras justo odio
                                <span className="badge badge-primary badge-pill">14</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade invisible" id="PeirceY4Content" role="tabpanel" aria-labelledby="PeirceY4">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Cras justo odio
                                <span className="badge badge-primary badge-pill">14</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade show active" id="PeirceNLevelContent" role="tabpanel" aria-labelledby="PeirceNLevel">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                English Language Syllabus A
                                <span className="badge badge-primary badge-pill">3</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Combined Humanities
                                <span className="badge badge-primary badge-pill">5</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Mathematics Syllabus A
                                <span className="badge badge-primary badge-pill">2</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Science (Physics/Chemistry)
                                <span className="badge badge-primary badge-pill">2</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Food and Nutrition
                                <span className="badge badge-primary badge-pill">3</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Chinese
                                <span className="badge badge-primary badge-pill">4</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Chinese (Oral/AURAL)
                                <span className="badge badge-primary badge-pill">Merit</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                  <details>
                    <summary>CCA</summary>
                    <p>President of IT Media Club (AV and Photography)</p>
                  </details>
                </div>
              </div>
            </div>
            {/* Education - Ai Tong School */}
            <div className="list-group-item flex-column align-items-start">
              <div className="row">
                <div className="col-xl-1 col-lg-2 col-md-3 col-sm-4 col-12">
                  <img src="https://igx.4sqi.net/img/general/width960/234324_8fYPoACzTltfYW4OB5qcfVo54oEOw4iyumgpYZj6eIQ.jpg" alt="Ai Tong School logo" className="img-thumbnail rounded float-left mr-3 schoolLogo"/>
                </div>
                <div className="col-xl-11 col-lg-10 col-md-9 col-sm-8 col-12">
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-1">Ai Tong School</h5>
                    <small>161</small>
                  </div>
                  <p className="mb-1">
                    PSLE
                  </p>
                  <small>January 2000 - November 2005</small>
                  <div className="clearfix"/>
                  <details>
                    <summary>Subjects</summary>
                    <div className="row">
                      <div className="col-4">
                        <div className="list-group" id="AiTongContent" role="tablist">
                          <a className="btn btn-primary" id="AiTongY1" data-toggle="list" href="#AiTongY1Content" role="tab" aria-controls="AiTong Year 1">Primary 1</a>
                          <a className="btn btn-primary" id="AiTongY1.5" data-toggle="list" href="#AiTongY1.5Content" role="tab" aria-controls="AiTong Year 1.5">Primary 1.5</a>
                          <a className="btn btn-primary" id="AiTongY2" data-toggle="list" href="#AiTongY2Content" role="tab" aria-controls="AiTong Year 2">Primary 2</a>
                          <a className="btn btn-primary" id="AiTongY2.5" data-toggle="list" href="#AiTongY2.5Content" role="tab" aria-controls="AiTong Year 2.5">Primary 2.5</a>
                          <a className="btn btn-primary" id="AiTongY3" data-toggle="list" href="#AiTongY3Content" role="tab" aria-controls="AiTong Year 3">Primary 3</a>
                          <a className="btn btn-primary" id="AiTongY3.5" data-toggle="list" href="#AiTongY3.5Content" role="tab" aria-controls="AiTong Year 3.5">Primary 3.5</a>
                          <a className="btn btn-primary" id="AiTongY4" data-toggle="list" href="#AiTongY4Content" role="tab" aria-controls="AiTong Year 4">Primary 4</a>
                          <a className="btn btn-primary" id="AiTongY4.5" data-toggle="list" href="#AiTongY4.5Content" role="tab" aria-controls="AiTong Year 4.5">Primary 4.5</a>
                          <a className="btn btn-primary" id="AiTongY5" data-toggle="list" href="#AiTongY5Content" role="tab" aria-controls="AiTong Year 5">Primary 5</a>
                          <a className="btn btn-primary" id="AiTongY5.5" data-toggle="list" href="#AiTongY5.5Content" role="tab" aria-controls="AiTong Year 5.5">Primary 5.5</a>
                          <a className="btn btn-primary" id="AiTongY6" data-toggle="list" href="#AiTongY6Content" role="tab" aria-controls="AiTong Year 6">Primary 6</a>
                          <a className="btn btn-primary" id="AiTongY6.5" data-toggle="list" href="#AiTongY6.5Content" role="tab" aria-controls="AiTong Year 6.5">Primary 6.5</a>
                          <a className="btn btn-primary active" id="AiTongPSLE" data-toggle="list" href="#AiTongPSLEContent" role="tab" aria-controls="AiTong Year PSLE">PSLE</a>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="tab-content" id="nav-tabContent">
                          <div className="tab-pane fade" id="AiTongY1Content" role="tabpanel" aria-labelledby="AiTongY1">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                English
                                <span className="badge badge-primary badge-pill">2</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Chinese
                                <span className="badge badge-primary badge-pill">2</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Mathematics
                                <span className="badge badge-primary badge-pill">1</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Art and Craft
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Civics and Moral Education
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Health Education
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Music
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Physical Education
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Social Studies
                                <span className="badge badge-primary badge-pill">-</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="AiTongY1.5Content" role="tabpanel" aria-labelledby="AiTongY1.5">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                English
                                <span className="badge badge-primary badge-pill">2</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Chinese
                                <span className="badge badge-primary badge-pill">2</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Mathematics
                                <span className="badge badge-primary badge-pill">3</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Art and Craft
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Civics and Moral Education
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Health Education
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Music
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Physical Education
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Social Studies
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="AiTongY2Content" role="tabpanel" aria-labelledby="AiTongY2">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                English
                                <span className="badge badge-primary badge-pill">3</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Chinese
                                <span className="badge badge-primary badge-pill">2</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Mathematics
                                <span className="badge badge-primary badge-pill">1</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Art and Craft
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Civics and Moral Education
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Health Education
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Music
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Physical Education
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Social Studies
                                <span className="badge badge-primary badge-pill">-</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="AiTongY2.5Content" role="tabpanel" aria-labelledby="AiTongY2.5">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                English
                                <span className="badge badge-primary badge-pill">2</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Chinese
                                <span className="badge badge-primary badge-pill">3</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Mathematics
                                <span className="badge badge-primary badge-pill">2</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Art and Craft
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Civics and Moral Education
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Health Education
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Music
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Physical Education
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Social Studies
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="AiTongY3Content" role="tabpanel" aria-labelledby="AiTongY3">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                English
                                <span className="badge badge-primary badge-pill">3</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Chinese
                                <span className="badge badge-primary badge-pill">4</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Mathematics
                                <span className="badge badge-primary badge-pill">3</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Science
                                <span className="badge badge-primary badge-pill">2</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Art and Craft
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Civics and Moral Education
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Health Education
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Music
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Physical Education
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Social Studies
                                <span className="badge badge-primary badge-pill">-</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="AiTongY3.5Content" role="tabpanel" aria-labelledby="AiTongY3.5">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                English
                                <span className="badge badge-primary badge-pill">3</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Chinese
                                <span className="badge badge-primary badge-pill">4</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Mathematics
                                <span className="badge badge-primary badge-pill">2</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Science
                                <span className="badge badge-primary badge-pill">2</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Art and Craft
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Civics and Moral Education
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Health Education
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Music
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Physical Education
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Social Studies
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="AiTongY4Content" role="tabpanel" aria-labelledby="AiTongY4">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                English
                                <span className="badge badge-primary badge-pill">3</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Chinese
                                <span className="badge badge-primary badge-pill">4</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Mathematics
                                <span className="badge badge-primary badge-pill">3</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Science
                                <span className="badge badge-primary badge-pill">2</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Social Studies
                                <span className="badge badge-primary badge-pill">3</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Art and Craft
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Health Education
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Music
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Physical Education
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Civics and Moral Education
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="AiTongY4.5Content" role="tabpanel" aria-labelledby="AiTongY4.5">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                English
                                <span className="badge badge-primary badge-pill">3</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Chinese
                                <span className="badge badge-primary badge-pill">4</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Mathematics
                                <span className="badge badge-primary badge-pill">3</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Science
                                <span className="badge badge-primary badge-pill">3</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Social Studies
                                <span className="badge badge-primary badge-pill">3</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Art and Craft
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Health Education
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Music
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Physical Education
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Civics and Moral Education
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="AiTongY5Content" role="tabpanel" aria-labelledby="AiTongY5">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                English
                                <span className="badge badge-danger badge-pill">4</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Chinese
                                <span className="badge badge-danger badge-pill">4</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Mathematics
                                <span className="badge badge-danger badge-pill">4</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Science
                                <span className="badge badge-primary badge-pill">3</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Social Studies
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Art and Craft
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Health Education
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Music
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Physical Education
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Civics and Moral Education
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="AiTongY5.5Content" role="tabpanel" aria-labelledby="AiTongY5.5">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                English
                                <span className="badge badge-primary badge-pill">3</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Chinese
                                <span className="badge badge-danger badge-pill">4</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Mathematics
                                <span className="badge badge-danger badge-pill">4</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Science
                                <span className="badge badge-primary badge-pill">3</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Social Studies
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Art and Craft
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Health Education
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Music
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Physical Education
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Civics and Moral Education
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="AiTongY6Content" role="tabpanel" aria-labelledby="AiTongY6">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                English
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Chinese
                                <span className="badge badge-danger badge-pill">D</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Mathematics
                                <span className="badge badge-danger badge-pill">D</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Science
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Social Studies
                                <span className="badge badge-primary badge-pill">1B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Art and Craft
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Health Education
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Music
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Physical Education
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Civics and Moral Education
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="AiTongY6.5Content" role="tabpanel" aria-labelledby="AiTongY6.5">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                English
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Chinese
                                <span className="badge badge-danger badge-pill">D</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Mathematics
                                <span className="badge badge-danger badge-pill">D</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Science
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Social Studies
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Art and Craft
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Health Education
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Music
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Physical Education
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Civics and Moral Education
                                <span className="badge badge-primary badge-pill">A</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade show active" id="AiTongPSLEContent" role="tabpanel" aria-labelledby="AiTongPSLE">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                English
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Chinese
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Mathematics
                                <span className="badge badge-primary badge-pill">C</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Science
                                <span className="badge badge-primary badge-pill">B</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                  <details>
                    <summary>CCA</summary>
                    <p>Computer Club</p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Skills */}
        <section className="pad container-fluid bg-light">
          <div className="container">
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
          </div>
        </section>
        {/* <section className="pad container invisible">
          <h1><FontAwesomeIcon icon={faHandPaper}/> Skills</h1>
        </section> */}
      </DocumentMeta>
    )
  }
}

export default MainPage;
