import React from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import { WebviewWindow } from '@tauri-apps/api/window'
import { AppIcon, AppName, Apps, Container, MainFrame } from './styles.js'
import squareIcon from '/plus-square.svg'

const Home = () => {

  const addAppWindow = () => {
    let newWindow = new WebviewWindow('popup', {
      url: '/addApp',
      title: 'Adicionar Aplicativo/Pasta',
      height: 200,
      width: 500,
      resizable: false,
      decorations: false,
    })

    newWindow.once('tauri://close-requested', () => {
      newWindow.close();
    })
  }

  const handleOpen = async (path) => {
    try {
      await invoke('open_path', { path })
    } catch (error) {
      console.error('Error opening path:', error);
    }
  }

  return (
    <>
      <Container>
        <MainFrame>
          <Apps onDoubleClick={() => handleOpen("C:/Users/leona/Desktop/dev")}>
            <AppIcon src="/folder.ico"/>
            <AppName>Dev</AppName>
          </Apps>
          {/** 
           * Apps
           */}
          <Apps onDoubleClick={addAppWindow}>
            <AppIcon src={squareIcon}/>
          </Apps>
        </MainFrame>
      </Container>
    </>
  )
}

export default Home
