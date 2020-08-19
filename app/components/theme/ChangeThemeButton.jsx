import React, { useCallback } from 'react';

import { themes, useTheme } from 'app/theme'

export const ChangeThemeDropdownButton = ({ children, type }) => {
  const [
    theme,
    setTheme,
    currentType,
    setType
  ] = useTheme()
  const changeType = useCallback(() => setType(type))
  return (
    <a className={`theme-dropdown-item ${currentType == type && 'active'} ${theme}`} onClick={changeType}>{children}</a>
  )
}