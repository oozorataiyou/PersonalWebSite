import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHome from '@fortawesome/fontawesome-pro-regular/faHome';
import AccessAlarmIcon from 'material-ui-icons/AccessAlarm';

export class ZWrapper extends React.Component{
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
              <li className="nav-item active">
                <Link className="nav-link" to="/"><FontAwesomeIcon icon={faHome}/></Link>
              </li>
            </ul>
          </div>
        </nav>
        <div style={{height:"60px"}}>Wrapper</div>
        {this.props.children}
      </div>
    )
  }
}
export default ZWrapper;
