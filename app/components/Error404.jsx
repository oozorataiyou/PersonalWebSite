import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Card from 'app/components/theme/Card'

const Error404 = () =>{
  return (
    <div className="container-fluid">
      <div className="wholePageWithNav d-flex justify-content-center align-items-center">
        <Card classes="w-75">
          <React.Fragment>
            <div className="card-header">
              <span className="font-weight-bold">Error 404</span>, <span className="font-weight-lighter">page cannot be found</span>
            </div>
            <div className="card-body">
              <div className="card-title h1">Hello,</div>
              <div className="card-text">
                <p>
                  Thank you for coming to my website.<br />
                  If you are looking for the mainpage click here<br />
                  Here are some quick links related to me if you are interested instead of the mainpage<br />
                </p>
                <ul className="list-unstyled fa-ul">
                  <li><a href="mailto:malcolmchew1993@gmail.com" target="_blank">
                    <span className="fa-layers fa-fw fa-li">
                      <FontAwesomeIcon icon={['fad', 'envelope']} transform="shrink-1 left-2 up-2" />
                      <FontAwesomeIcon icon={['fas', 'briefcase']} transform="shrink-6 right-4 down-4" />
                    </span>
                  Contact me (Recruitment)
                </a></li>
                  <li><a href="mailto:taiyoozoraapps@gmail.com" target="_blank">
                    <span className="fa-layers fa-fw fa-li">
                      <FontAwesomeIcon icon={['fad', 'envelope']} transform="shrink-1 left-2 up-2" />
                      <FontAwesomeIcon icon={['fab', 'app-store-ios']} transform="shrink-6 right-4 down-4" />
                    </span>
                  Contact me (Applications)
                </a></li>
                  <li><a href="https://github.com/taiyoOzora/PersonalWebSite" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} listItem /> GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/malcolmchew" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} listItem /> LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </React.Fragment>
        </Card>
      </div>
    </div>
  )
}

export default Error404;