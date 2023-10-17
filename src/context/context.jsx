import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const functions = {
    isSidebarOpen,
    setIsSidebarOpen,
  }

  return (
    <AppContext.Provider value={{ ...functions }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export default AppProvider
