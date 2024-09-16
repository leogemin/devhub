import styled from "styled-components";

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

export const AppName = styled.h5`
  text-align: center;
  font-weight: normal;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100vw;
  font-size: 12px;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 5px 10px;
  background-color: #1a1a1a;
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