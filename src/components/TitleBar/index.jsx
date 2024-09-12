import { appWindow } from "@tauri-apps/api/window";
import React from 'react'
import {
  Nav,
  Title,
  Close,
  MainArea
} from './styles.js'

const TitleBar = () => {
  const handleClose = () => {
    appWindow.minimize();
  };

  const handleDrag = () => {
    appWindow.startDragging();
  }

  return (
    <Nav>
      <MainArea onMouseDown={handleDrag}>
        <Title>appHub</Title>  
      </MainArea>
      <Close onClick={handleClose}>-</Close>
    </Nav>
  );
}

export default TitleBar;
