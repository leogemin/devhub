import React, { useState } from 'react'
import { AddBtn, ButtonFile, Container, Entradas, FileDiv, FormFrame, InputBox } from './styles'
import { dialog, path } from '@tauri-apps/api'
import { invoke } from '@tauri-apps/api/tauri'
import { appWindow } from '@tauri-apps/api/window'

const AddApp = () => {
  const [folderPath, setFolderPath] = useState('') // tudo em react é mais dificil então useState
  const [appIcon, setAppIcon] = useState('')
  
  const handleSearchFolder = async () => {
    const path = await dialog.open({
      multiple: false,
      directory: true
    })

    if (path) {
      setAppIcon("/folder.ico")
      setFolderPath(path.replaceAll("\\", "/")) // troca as contrabarra por barra na hora do set
    }
  }

  const handleSearchFile = async () => {
    const path = await dialog.open({
      multiple: false,
      filters: [{
        name: "All",
        extensions: ['*']
      }]
    })

    if (path) {
      setAppIcon("/file.ico")
      setFolderPath(path.replaceAll("\\", "/")); // troca as contrabarra por barra na hora do set
    }
  }

  const handleAddApp = async () => {
    const novoObjeto = { // Camelcase pq o tauri converte o snake_case em camel pra conversar com o front (????)
      name: document.getElementById("name").value + "",
      path: folderPath,
      icon: appIcon
    };

    try {
      await invoke('add_object', { novoObjeto }); 
    } catch (error) {
      console.error('Error adding element:', error);
    }

    appWindow.close()
  }
  

  return (
    <Container>
      <FormFrame>
        <InputBox>
          <h5>Nome do App</h5>
          <Entradas id="name" type="text" required/>
        </InputBox>
        
        <InputBox>
          <h5>Caminho do App/Pasta</h5>

          <FileDiv>
            <Entradas value={folderPath} type="text" required readOnly/> 
            
            <ButtonFile onClick={handleSearchFolder}>Search Folder</ButtonFile>
            <ButtonFile onClick={handleSearchFile}>Search File</ButtonFile>
          </FileDiv>
        </InputBox>

        <InputBox>
          <AddBtn onClick={handleAddApp}>Adicionar ao Hub</AddBtn>
        </InputBox>
      </FormFrame>
    </Container>
  )
}

export default AddApp
