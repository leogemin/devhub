import React, {useState} from 'react'
import TitleBar from '../../components/TitleBar'
import { appWindow } from '@tauri-apps/api/window'
import { AddBtn, ButtonFile, Container, Entradas, FileDiv, FormFrame, InputBox } from './styles'

const EditApp = () => {
     return (
          <>
          <TitleBar hasMenu={false}/>
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
          </>
        )
}

export default EditApp
