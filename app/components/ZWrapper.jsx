import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/pro-duotone-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/fontawesome-free-brands';

import { themes, useTheme } from 'app/theme'
import { ChangeThemeDropdownButton } from 'app/components/theme/ChangeThemeButton'

const ZWrapper = ({children}) =>{
  const [ theme ] = useTheme()
  const currentTheme = themes[theme]

  return (
    <React.Fragment>
      <Helmet>
        <title>Malcolm's Portfolio</title>
        <body className={`${currentTheme.bg}`} />
      </Helmet>
      <nav className={`navbar navbar-expand-md ${currentTheme.nav} ${currentTheme.bg}`}>
        <Link className="navbar-brand" to="/">太陽</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active"><FontAwesomeIcon icon={faHome} /></NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="https://github.com/taiyoOzora/PersonalWebSite" target="_blank" className="nav-link"><FontAwesomeIcon icon={faGithub} /></a>
            </li>
            <li className="nav-item">
              <a href="https://www.linkedin.com/in/malcolmchew" target="_blank" className="nav-link"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Theme
              </a>
              <div className={`dropdown-menu ${currentTheme.bg}`} aria-labelledby="themeDropdownlink">
                <ChangeThemeDropdownButton type="light"><FontAwesomeIcon icon={["fad", "lightbulb-on"]} /> Light</ChangeThemeDropdownButton>
                <ChangeThemeDropdownButton type="dark"><FontAwesomeIcon icon={["fad", "lightbulb-slash"]} /> Dark</ChangeThemeDropdownButton>
                <ChangeThemeDropdownButton type="system"><FontAwesomeIcon icon={["fad", "phone-laptop"]} /> System</ChangeThemeDropdownButton>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      {children}
    </React.Fragment>
  )
}

export default ZWrapper;