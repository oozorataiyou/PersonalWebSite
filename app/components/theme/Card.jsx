import React from 'react'

import { themes, useTheme } from 'app/theme'

const Card = ({
  children,
  classes,
}) => {
  const [theme] = useTheme()
  const currentTheme = themes[theme]

  return (
    <div className={`card  ${currentTheme.card} ${currentTheme.text} ${classes || ''}`}>
      {children}
    </div>
  )
}

export default Card;