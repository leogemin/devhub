import React from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { Apps, AppIcon, AppName } from './styles';

const Block = ({ appName, path, onFocus, onBlur }) => {
  const handleOpen = async () => {
    try {
      await invoke('open_path', { path });
    } catch (error) {
      console.error('Error opening path:', error);
    }
  };

  return (
    <Apps tabIndex={0} onFocus={onFocus} onDoubleClick={handleOpen} onBlur={onBlur}>
      <AppIcon src="/folder.ico" />
      <AppName>{appName}</AppName>
    </Apps>
  );
};

export default Block;
