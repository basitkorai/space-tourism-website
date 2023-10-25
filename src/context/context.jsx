import { createContext, useContext, useState } from 'react'
import data from '../data/data.json'

const destinations = data.destinations
const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [destination, setDestination] = useState(destinations[0])

  console.log(destinations)
  const functions = {
    isSidebarOpen,
    setIsSidebarOpen,
    destination,
    setDestination,
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
