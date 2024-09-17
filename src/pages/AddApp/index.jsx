import React, { useState } from 'react'
import { AddBtn, ButtonFile, Container, Entradas, FileDiv, FormFrame, InputBox } from './styles'
import { dialog, path } from '@tauri-apps/api'
import { invoke } from '@tauri-apps/api/tauri'

const AddApp = () => {
  const [folderPath, setFolderPath] = useState('') // tudo em react é mais dificil então useState

  const handleSearchFolder = async () => {
    const path = await dialog.open({
      directory: true, 
      multiple: false, 
    });

    if (path) {
      setFolderPath(path.replaceAll("\\", "/")); // troca as contrabarra por barra na hora do set
    }
  }


  const handleAddApp = async () => {
    const novoObjeto = { // Camelcase pq o tauri converte o snake_case em camel pra conversar com o front (????)
      name: document.getElementById("name").value + "",
      path: folderPath,
      icon: "/folder.ico"
    };
    
    // console.log(novoObjeto)

    try {
      await invoke('add_object', { novoObjeto }); 
    } catch (error) {
      console.error('Error adding element:', error);
    }
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
