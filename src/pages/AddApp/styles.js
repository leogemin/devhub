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

export const ButtonFile = styled.button`
      border: 2px solid var(--lightGray);
      padding: 3px 7px;
      border-radius: 7px;

      width: 41%;

      font-size: 14px;
      background: none;

      transition: .05s all ease;

      &:hover {
            color: var(--darkGray);
            background-color: var(--lightGray);
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
      gap: 10px;
      align-items: center;

      & > input {
            width: 100%;
      }
`

export const AddBtn = styled.button`
      background: none;
      outline: none;
      border: 2px solid var(--lightGray);
      border-radius: 6px;
      appearance: none;
      padding: 5px;
      font-size: 16px;

      transition: .05s all ease;

      &:hover {
            background-color: var(--lightGray);
            color: var(--darkGray);
      }
`