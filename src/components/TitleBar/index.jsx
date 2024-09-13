import { appWindow } from "@tauri-apps/api/window";
import React from 'react'
import {
  Nav,
  Title,
  Close,
  MainArea,
  Minimize
} from './styles.js'

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
        <Title>devHub</Title>  
      </MainArea>
      <Minimize onClick={handleMin}>-</Minimize>
      <Close onClick={handleClose}>×</Close>
    </Nav>
  );
}

export default TitleBar;
