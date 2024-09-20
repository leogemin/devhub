import { appWindow } from "@tauri-apps/api/window";
import React from 'react'
import {
  Nav,
  Menu,
  Close,
  MainArea,
  Minimize
} from './styles.js'
import { useNavigate } from "react-router-dom";

const TitleBar = () => {

  const handleMin = () => {
    appWindow.minimize()
  };

  const handleClose = () => {
    appWindow.close()
  }

  const handleDrag = () => {
    appWindow.startDragging()
  }

  return (
    <Nav>
      <MainArea onMouseDown={handleDrag}>
        <h4>devHub</h4>
        <Menu>
          <li onClick={() => useNavigate("/arquivos")}>Arquivos</li>
          <li onClick={() => useNavigate("/codeframes")}>Code Frames</li>
        </Menu>  
      </MainArea>
      <Minimize onClick={handleMin}>-</Minimize>
      <Close onClick={handleClose}>×</Close>
    </Nav>
  );
}

export default TitleBar;
