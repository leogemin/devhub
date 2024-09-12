import styled from "styled-components";

export const Nav = styled.div`
      width: 100vw;
      background-color: #333333;
      height: 25px;
      display: flex;
      align-items: center;

      & > button {
            appearance: none;
            border: none;
            outline: none;
            background-color: transparent;
            height: 100%;
            aspect-ratio: 4 / 4;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            transition: .1s all ease;
      }
`

export const Title = styled.h4`


`

export const MainArea = styled.div`
      display: flex;
      padding: 0 10px;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
`

export const Minimize = styled.button`
      &:hover {
            background-color: #4a4a4a;
            color: white;
      }
`

export const Close = styled.button`
      &:hover {
            background-color: red;
            color: white;
      }
`