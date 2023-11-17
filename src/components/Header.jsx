import { useGlobalContext } from '../context/context'
import { AnimatePresence } from 'framer-motion'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Header = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext()

  return (
    <header>
      <AnimatePresence>
        {isSidebarOpen ? <Sidebar key={1} /> : null}
        <Navbar key={2} />
      </AnimatePresence>
    </header>
  )
}

export default Header
