import React from 'react'

import { themes, useTheme } from 'app/theme'

const Table = ({
  children,
  classes,
}) => {
  const [theme] = useTheme()
  const currentTheme = themes[theme]

  return (
    <table className={`table  ${currentTheme.table} ${classes || ''}`}>
      {children}
    </table>
  )
}

export default Table;