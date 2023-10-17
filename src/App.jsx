import AppProvider from './context/context'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Destination from './pages/Destination.jsx'

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
