import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHome from '@fortawesome/fontawesome-pro-regular/faHome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';

export default class ZWrapper extends React.Component{
  PropTypes = {
    classes: PropTypes.object.isRequired,
  };

  render(){
    return(
      <div>
        <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
          <Link className="navbar-brand" to="/">太陽</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" activeClassName="active"><FontAwesomeIcon icon={faHome}/></NavLink>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="https://github.com/taiyoOzora/PersonalWebSite" target="_blank" className="nav-link"><FontAwesomeIcon icon={faGithub}/></a>
              </li>
              <li className="nav-item">
                <a href="https://www.linkedin.com/in/malcolmchew" target="_blank" className="nav-link"><FontAwesomeIcon icon={faLinkedin}/></a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="pad-away-from-nav" />
        {this.props.children}
      </div>
    )
  }
}
