import { createContext, useContext, useState } from 'react'
import data from '../data/data.json'

const destinations = data.destinations
const team = data.crew
const technology = data.technology

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [destination, setDestination] = useState(destinations[0])
  const [crew, setCrew] = useState(team[0])
  const [tech, setTech] = useState(technology[0])

  const functions = {
    isSidebarOpen,
    setIsSidebarOpen,
    destination,
    setDestination,
    crew,
    setCrew,
    tech,
    setTech,
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
