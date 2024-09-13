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