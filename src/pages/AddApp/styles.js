import styled from "styled-components"

export const Container = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      height: 100vh;
      width: 100vw;
`

export const ButtonFile = styled.label`
      border: 2px solid #d3d3d3;
      padding: 1px 7px;
      border-radius: 7px;

      transition: .05s all ease;

      &:hover {
            color: #1a1a1a;
            background-color: #d3d3d3;
      }
`

export const InputBox = styled.div`
      display: flex;
      flex-direction: column;
      gap: 4px;
`

export const FormFrame = styled.div`
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      height: 100%;
`

export const Entradas = styled.input`
      border: none;
      outline: none;
      background-color: #4a4a4a;
      padding: 5px; 
`

export const FileDiv = styled.div`
      display: flex;
      gap: 15px;
      align-items: center;

      & > input {
            width: 100%;
      }
`