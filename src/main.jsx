import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/index.jsx'
import GlobalStyles from './styles/globalStyles.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddApp from './pages/AddApp/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/addApp",
        element: <AddApp/>
      }
    ],
  }
]) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
