import React, { useState } from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import { Apps, AppIcon, AppName } from './styles'
import FooterComponent from './FooterComponent'

const Block = ({ appName, path, ico }) => {
  const [footerVisible, setFooterVisible] = useState(false);

  const handleOpen = async () => { // chama função tauri pra abrir pastas e apps
    try {
      await invoke('open_path', { path })
    } catch (error) {
      console.error('Caminho não encontrado:', error)
    }
  }

  return (
    <div onFocus={() => setFooterVisible(true)}>
      <Apps tabIndex={0} onDoubleClick={handleOpen}>
        <AppIcon src={ico} />
        <AppName>{appName}</AppName>
      </Apps>

      <FooterComponent path={path} visible={footerVisible} onClose={() => setFooterVisible(false)} />
    </div>
  )
}

export default Block
