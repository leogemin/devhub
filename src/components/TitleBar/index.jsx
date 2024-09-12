import { appWindow } from "@tauri-apps/api/window";
import React from 'react'
import {
  Nav,
  Title,
  Close
} from './styles.js'

const TitleBar = () => {
  const handleClose = () => {
    appWindow.close();
  };

  return (
    <Nav>
      <Title>appHub</Title>
      <Close onClick={handleClose}>-</Close>
    </Nav>
  );
}

export default TitleBar;
