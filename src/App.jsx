import React from 'react'
import { Outlet } from 'react-router-dom'
import TitleBar from './components/TitleBar'

const App = () => {
  return (
    <>
      <TitleBar />
      <Outlet />
    </>
  )
}

export default App
