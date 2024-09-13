import React from 'react'
import { AddBtn, ButtonFile, Container, Entradas, FileDiv, FormFrame, InputBox } from './styles'


const AddApp = () => {
  return (
    <Container>
      <FormFrame>
        <InputBox>
          <h5>Nome do App</h5>
          <Entradas type="text" />
        </InputBox>
        
        <InputBox>
          <h5>Caminho do App/Pasta</h5>

          <FileDiv>
            <Entradas type="text"/> 
            
            <Entradas style={{display: 'none'}} id="filePath" type="file"/>
            <ButtonFile htmlFor="filePath">Search</ButtonFile>
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
