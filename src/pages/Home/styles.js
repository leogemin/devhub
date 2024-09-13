import styled from "styled-components";

export const Container = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 15px 15px 15px;
      height: 100vh;
      width: 100vw;
`

export const MainFrame = styled.div`
  width: 100%;
  height: 85%;
  
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-right: 8px;
  gap: 10px;

  overflow-y: auto;
`

export const Apps = styled.div`
      /* background-color: #7a7a7a; */
      aspect-ratio: 4 / 4;
      height: 84.4px;

      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      transition: .05s all ease;

      &:hover {
        background-color: rgba(110, 180, 255, .3);
      }

      &:focus {
        background-color: rgba(110, 180, 255, .3);
        border: 1px dotted #d3d3d3;
      }
`

export const AppIcon = styled.img`
  width: 50%;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 20px;
  width: 100%;
  font-size: 12px;
`

export const Options = styled.button`
  appearance: none;
  background: none;
  border: none;
  outline: none;

  padding: 3px 8px;

  &:hover {
    background-color: rgba(110, 180, 255, .3);
  }
`