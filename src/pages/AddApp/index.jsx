import React, { useState } from 'react'
import { AddBtn, ButtonFile, Container, Entradas, FileDiv, FormFrame, InputBox } from './styles'
import { dialog, path } from '@tauri-apps/api'
import { invoke } from '@tauri-apps/api/tauri'

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


  const handleAddApp = async () => {
    const novo_objeto = {
      name: document.getElementById("name").value,
      path: folderPath,
      icon: "/folder.ico"
    };
  
    console.log("Serialized object:", JSON.stringify(novo_objeto)); // Log serialized object for debugging
  
    try {
      await invoke('add_object', { novo_objeto });
    } catch (error) {
      console.error('Error adding element:', error);
    }
  };

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
            
            <ButtonFile onClick={handleSearchFolder}>Search</ButtonFile>
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
