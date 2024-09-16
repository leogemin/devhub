import React, { useState } from 'react'
import { AddBtn, ButtonFile, Container, Entradas, FileDiv, FormFrame, InputBox } from './styles'
import { dialog } from '@tauri-apps/api'

const AddApp = () => {

  const [folderPath, setFolderPath] = useState('')

  const handleSearchFolder = async () => {
    const path = await dialog.open({
      directory: true, 
      multiple: false, 
    });

    if (path) {
      setFolderPath(path.replaceAll("\\", "/")); 
    }
  }

  return (
    <Container>
      <FormFrame>
        <InputBox>
          <h5>Nome do App</h5>
          <Entradas type="text" required/>
        </InputBox>
        
        <InputBox>
          <h5>Caminho do App/Pasta</h5>

          <FileDiv>
            <Entradas value={folderPath} type="text" required/> 
            
            <ButtonFile onClick={handleSearchFolder}>Search</ButtonFile>
          </FileDiv>
        </InputBox>

        <InputBox>
          <AddBtn>Adicionar ao Hub</AddBtn>
        </InputBox>
      </FormFrame>
    </Container>
  )
}

export default AddApp
