import { createContext, useState } from 'react'

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const [isDark, setIsDark] = useState(true);

  const appInfo = {
    isDark, setIsDark
  }

  return (
    <AppContext.Provider value={appInfo}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider