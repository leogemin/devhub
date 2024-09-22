import { appWindow } from "@tauri-apps/api/window";
import React from 'react'
import {
  Nav,
  Menu,
  Close,
  MainArea,
  Minimize,
  TitleLabel
} from './styles.js'
import { useNavigate } from "react-router-dom";

const TitleBar = ({ hasMenu }) => {

  const handleMin = () => {
    appWindow.minimize()
  }

  const handleClose = () => {
    appWindow.close()
  }

  const handleDrag = () => {
    appWindow.startDragging()
  }

  const navigate = useNavigate()

  return (
    <Nav>
      <MainArea>
        <TitleLabel onClick={hasMenu ? () => navigate("/") : null} >
          <h4>dev</h4>
          <h4>Hub</h4>
        </TitleLabel>
        <Menu style={{display: hasMenu ? "flex" : "none"}}>
          <li onClick={() => navigate("/arquivos")}>Arquivos</li>
          <li onClick={() => navigate("/codeframes")}>Code Frames</li>
        </Menu>
        <div style={{flexGrow: 1, height: '25px'}} onMouseDown={handleDrag}></div>  
      </MainArea>
      <Minimize onClick={handleMin}>-</Minimize>
      <Close onClick={handleClose}>×</Close>
    </Nav>
  );
}

export default TitleBar;
