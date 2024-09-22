import React from 'react'
import { Outlet } from 'react-router-dom'
import TitleBar from './components/TitleBar'

const App = () => {
  return (
    <>
      <TitleBar hasMenu={true}/>
      <Outlet />
    </>
  )
}

export default App
