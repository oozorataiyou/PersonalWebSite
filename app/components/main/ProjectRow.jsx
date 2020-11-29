import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { themes, useTheme } from 'app/theme';

const ProjectRow = ({
  details: {
    id,
    desc,
    name,
    links,
  }
}) => {
  const [theme] = useTheme()
  const currentTheme = themes[theme]

  const getIcon = urlName =>{
    switch(urlName){
      case "GitHub (iOS)":
        return (
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon icon={['fab', 'github']} transform="shrink-1 left-2 up-2" />
          <FontAwesomeIcon icon={['fab', 'app-store-ios']} transform="shrink-6 right-4 down-4" />
          </span>)
      case "GitHub (Android)":
        return (
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={['fab', 'github']} transform="shrink-1 left-2 up-2" />
            <FontAwesomeIcon icon={['fab', 'android']} transform="shrink-6 right-4 down-4" />
          </span>)
      case "GitHub (Web)":
        return (
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={['fab', 'github']} transform="shrink-1 left-2 up-2" />
            <FontAwesomeIcon icon={['fad', 'browser']} transform="shrink-6 right-4 down-4" />
          </span>)
      case "iOS": return <FontAwesomeIcon icon={['fab', 'app-store-ios']} />
      case "Android": return <FontAwesomeIcon icon={['fab', 'android']} />
      case "Web": return <FontAwesomeIcon icon={['fad', 'browser']} />
      case "Contact Me": return <FontAwesomeIcon icon={['fad', 'envelope']} />
      case "Bug Report": return <FontAwesomeIcon icon={['fad', 'bug']} />
      default: return <FontAwesomeIcon icon={['fad', 'link']} />
    }
  }

  const createLinkButton = (urlName, url, key) => (
    <li key={`${name}_${key}`}>
      <span className="fa-li">
        {getIcon(urlName)}
      </span>
      <a href={url} target="_blank">{urlName}</a>
    </li>
  )

  return (
    <div className={`list-group-item flex-column align-items-start ${currentTheme.bg} ${currentTheme.border}`}>
      <div className="row">
        <div className="col">
          <div>
            <h5 className="mb-1">{name}</h5>
          </div>
          <p className="mb-1">{desc}</p>
          <details>
            <summary>Links</summary>
            <ul className="fa-ul">
              {links.map((link, index) => createLinkButton(link.name, link.url, index))}
            </ul>
          </details>
        </div>
      </div>
    </div>
  )
}

export default ProjectRow;