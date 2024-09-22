import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Arquivos from './pages/Arquivos'
import GlobalStyles from './styles/globalStyles.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddApp from './pages/AddApp'
import Home from './pages/Home'
import CodeFrames from './pages/CodeFrames'

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
        path: "/arquivos",
        element: <Arquivos/>
      },
      {
        path: "/codeframes",
        element: <CodeFrames/>
      },
      
    ],
  },
  {
    path: "/addApp",
    element: <AddApp/>
  }
  
]) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
