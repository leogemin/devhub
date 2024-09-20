import styled, {keyframes} from "styled-components";

const FadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(5%)
  }
  50% {
    transform: translateY(0)
  }
  100% {
    opacity: 1;
  }
`

export const Container = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 15px 15px 15px;
      height: 100vh;
      width: 100vw;
      gap: 20px;
      animation: ${FadeIn} 1s linear;
`

export const Box = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     gap: 10px;
     border-radius: 10px;
     background-color: #2a2a2aEF;
     box-shadow: 0px 0px 5px #000;
     width: 200px;
     height: 150px;

     transition: .2s ease-in-out;

     &:hover {
          background-color: #1a1a1aEF;
     }
     
     img {
          height: 50px;
     }

     h2 {

     }
`