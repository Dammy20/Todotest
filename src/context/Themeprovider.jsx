import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

const ThemeContext = createContext(null)
export { ThemeContext }
const Themeprovider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState('light')
    
    return (
          <ThemeContext.Provider  value={{darkTheme, setDarkTheme}}>
            {children}  
      </ThemeContext.Provider>
  )

}
  

export default Themeprovider
