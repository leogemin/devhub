import styled from "styled-components";

export const Nav = styled.div`
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

export const Close = styled.button`
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

      &:hover {
            background-color: #4a4a4a;
            color: white;
      }
`