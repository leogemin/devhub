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
  height: 90%;
  
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-right: 8px;
  gap: 10px;

  overflow-y: auto;
`

export const Apps = styled.div`
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
        border: 1px dotted var(--lightGray);
      }
`

export const AppIcon = styled.img`
  width: 50%;
`