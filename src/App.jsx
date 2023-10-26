import AppProvider from './context/context'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Destination from './pages/Destination.jsx'
import Crew from './pages/Crew'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'index.html',
    element: <Home />,
  },
  {
    path: 'destination',
    element: <Destination />,
  },
  {
    path: 'crew',
    element: <Crew />,
  },
])

function App() {
  return (
    <>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </>
  )
}

export default App
