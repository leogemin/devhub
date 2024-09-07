import styled from "styled-components";

export const Container = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
      height: 100vh;
      width: 100vw;
`

export const TitleBar = styled.div`
      width: 100vw;
      background-color: #333333;
      height: 25px;
      display: flex;
      align-items: center;
`

export const Title = styled.h4`
      width: 100%;
      justify-content: center;
      display: flex;
      align-items: center;
`

export const MainFrame = styled.div`
  width: 100%;
  height: 95%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-right: 8px;
  gap: 5px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;   
    background: none;  

  }

  ::-webkit-scrollbar-track {
    background: none;  
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d3d3d350;    
    border-radius: 20px;
  }
`

export const Apps = styled.div`
      background-color: #7a7a7a;
      aspect-ratio: 4 / 4;
`