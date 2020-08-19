import React, {createContext, useContext, useEffect, useState, useCallback} from 'react';

const getMql = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')

const getBrowserTheme = () => {
  const mql = getMql()
  return mql && mql.matches ? 'dark' : 'light'
}

const onBrowserThemeChanged = callback => {
  const mql = getMql()
  const mqlListener = e => callback(e.matches ? 'dark' : 'light')
  mql && mql.addListener(mqlListener)
  return () => mql && mql.removeListener(mqlListener)
}

const getLocalStorageThemeType = () => {
  try {
    const localTheme = localStorage && localStorage.getItem('themeType')
    if (localTheme && ['light', 'dark', 'system'].includes(localTheme)) {
      return localTheme
    }
  } catch (err) {
    console.warn('Can’t access local storage:', err.message)
  }
}

const setLocalStorageThemeType = theme => {
  try {
    localStorage && localStorage.setItem('themeType', theme)
  } catch (err) {
    console.warn('Can’t write to local storage:', err.message)
  }
}

export const themes ={
  light:{
    nav: 'navbar-light',
    bg: 'bg-white',
    text: 'text-dark',
    border: 'border-default'
  },
  dark: {
    nav: 'navbar-dark',
    bg: 'bg-dark',
    text: 'text-white',
    border: 'border-light'
  }
}

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null)
  const [type, setType] = useState(null)

  const updateTheme = useCallback(newTheme => {
    console.log("theme changed", newTheme, getLocalStorageThemeType())
    if (getLocalStorageThemeType() == 'system') {
      setTheme(newTheme)
    }
  }, [setTheme]
  )

  const updateType = useCallback(newType => {
    console.log("updateType", newType)
    if (newType == 'system') {
      setTheme(getBrowserTheme())
    } else {
      setTheme(newType)
    }
    setType(newType)
    setLocalStorageThemeType(newType)
  }, [setType])

  useEffect(() => {
    console.log("useEffect")
    if (type === null) {
      if (getLocalStorageThemeType()){
        updateType(getLocalStorageThemeType())
      }else{
        updateType('system')
      }
    }
    return onBrowserThemeChanged(updateTheme)
  }, [theme, updateTheme])

  return (
    theme && (
      <ThemeContext.Provider value={[theme, updateTheme, type, updateType]}>
        {children}
      </ThemeContext.Provider>
    )
  )
}

export const useTheme = () => useContext(ThemeContext)