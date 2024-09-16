import React from 'react'
import { WebviewWindow } from '@tauri-apps/api/window'
import { AppIcon, Apps, Container, MainFrame } from './styles.js'
import squareIcon from '/plus-square.svg'
import Block from '../../components/Block/index.jsx'

const Home = () => {
  const addAppWindow = () => {
    let newWindow = new WebviewWindow('popup', {
      url: '/addApp',
      title: 'Adicionar Aplicativo/Pasta',
      height: 230,
      width: 500,
      resizable: false,
      decorations: false,
    })

    newWindow.once('tauri://close-requested', () => {
      newWindow.close()
    })
  }

  return (
    <>
      <Container>
        <MainFrame>
          <Block
            name="block"
            appName="Dev"
            path="D:/dev"
          />          
          {/** 
           * Apps
           */}

          <Apps onClick={addAppWindow}>
            <AppIcon src={squareIcon} />
          </Apps>
        </MainFrame>
      </Container>
    </>
  )
}

export default Home