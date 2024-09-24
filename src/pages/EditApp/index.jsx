import React from 'react'
import TitleBar from '../../components/TitleBar'
import { appWindow } from '@tauri-apps/api/window'
import { AddBtn, Container, Entradas, FormFrame, InputBox } from './styles'

const EditApp = ({ appName }) => {
     return (
          <>
          <TitleBar hasMenu={false}/>
          <Container>
            <FormFrame>
              <InputBox>
                <h5>Nome do App</h5>
                <Entradas id="name" type="text" value={ appName } required/>
              </InputBox>
      
              <InputBox>
                <AddBtn onClick={handleEditName}>Alterar Nome</AddBtn>
              </InputBox>
            </FormFrame>
          </Container>
          </>
        )
}

export default EditApp
