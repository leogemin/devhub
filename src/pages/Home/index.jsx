import React, { useState } from 'react'
import { WebviewWindow } from '@tauri-apps/api/window'
import { AppIcon, Apps, Container, Footer, MainFrame, Options } from './styles.js'
import squareIcon from '/plus-square.svg'
import Block from '../../components/Block/index.jsx'

const Home = () => {
  const [footerVisible, setFooterVisible] = useState(false)

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
          <Block appName="Dev" path="D:/dev" onFocus={() => setFooterVisible(true)} onBlur={() => setFooterVisible(false)}/>
          {/** 
           * Apps
           */}

          <Apps onClick={addAppWindow}>
            <AppIcon src={squareIcon} />
          </Apps>
        </MainFrame>
        
        <Footer style={{visibility: footerVisible ? "visible" : 'hidden'}}>
          <Options>
            Rename
          </Options>
          <Options>
            Open With VSCode
          </Options>
          <Options>
            Terminal
          </Options>
        </Footer>
      </Container>
    </>
  )
}

export default Home