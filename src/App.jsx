import AppProvider from './context/context'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'
import Destination from './pages/Destination.jsx'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <AppProvider>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="destination" element={<Destination />}></Route>
            <Route path="crew" element={<Crew />}></Route>
            <Route path="technology" element={<Technology />}></Route>
          </Route>
          <Route path="index.html" element={<Home />}></Route>
        </Routes>
      </AppProvider>
    </>
  )
}

export default App
