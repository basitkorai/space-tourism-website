import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import AppProvider from '../context/context'
import backgroundImages from '../utils/backgroundImages'

const Destination = () => {
  return (
    <AppProvider>
      <div className={`bg-destination ${backgroundImages}`}>
        <header>
          <Navbar />
          <Sidebar />
        </header>
      </div>
    </AppProvider>
  )
}

export default Destination
