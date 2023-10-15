import AppProvider from './context/context'
import Home from './pages/Home'

function App() {
  return (
    <>
      <AppProvider>
        <Home />
      </AppProvider>
    </>
  )
}

export default App
