import React from 'react'

import { themes, useTheme } from 'app/theme'

const ListGroupItem = ({
  children,
  classes,
}) => {
  const [theme] = useTheme()
  const currentTheme = themes[theme]

  return (
    <li className={`list-group-item ${classes || ''} ${currentTheme.listGroupItem}`}>
      {children}
    </li>
  )
}

export default ListGroupItem;