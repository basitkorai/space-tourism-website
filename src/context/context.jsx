import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const nextImage = () => {
    setIndex((index) => {
      const newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  const functions = {
    isSidebarOpen,
    setIsSidebarOpen,
    nextImage,
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
