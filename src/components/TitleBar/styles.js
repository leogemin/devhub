import styled from "styled-components";

export const Nav = styled.div`
      width: 100vw;
      background-color: var(--mediumGray);
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

export const Menu = styled.ul`
      display: flex;
      gap: 3px;
      
      li {
            text-wrap: nowrap;
            font-size: 0.8rem;
            list-style: none;
            padding:1px 5px;
            border-radius: 5px;

            transition: .05s ease-in-out;
            &:hover {
                  background-color: #a9a9a9;
                  color: var(--darkGray);
            }
      }
`

export const MainArea = styled.div`
      display: flex;
      padding: 0 10px;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      gap: 8px;
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