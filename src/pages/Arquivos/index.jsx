import React from 'react'
import { WebviewWindow } from '@tauri-apps/api/window'
import { AppIcon, Apps, Container, MainFrame } from './styles.js'
import squareIcon from '/plus-square.svg'
import Block from '../../components/Block/index.jsx'

import data from "../../../src-tauri/assets/objects.json"

const Arquivos = () => {
  const addAppWindow = () => { // telinha de adicionar novo app
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
          {data.map((object, index) => (
          <Block
            key={index}
            appName={object.name}
            path={object.path}
            ico={object.icon}
          />
          ))}
          <Apps onClick={addAppWindow}>
            <AppIcon src={squareIcon} />
          </Apps>
        </MainFrame>
      </Container>
    </>
  )
}

export default Arquivos