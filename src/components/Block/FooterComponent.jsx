import React from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import onClickOutside from 'react-onclickoutside'
import { Footer, Options } from './styles'

class FooterComponent extends React.Component { // ISSO DEU MUUUITO TRABALHO PQP
  handleClickOutside = () => {
    this.props.onClose()
  }

  handleOpenTerminal = async () => {
    const path = this.props.path

    try {
      await invoke('open_terminal', { path })
    }
    catch (error) {
      console.error("Deu ruim abrindo o terminal: ", error)
    }
  }

  handleOpenVscode = async () => {
    const path = this.props.path

    try {
      await invoke('open_vscode', { path })
    }
    catch (error) {
      console.error("Deu ruim abrindo o vscode: ", error)
    }
  }

  handleRenameApp = async () => {
    const appName = this.props.appName
  }

  render() {
    const { visible, path } = this.props

    return (
      <Footer style={{ visibility: visible ? 'visible' : 'hidden' }}>
        <Options onClick={this.handleRenameApp}>Rename</Options>
        <Options onClick={this.handleOpenVscode}>Open With VSCode</Options>
        <Options onClick={this.handleOpenTerminal}>Terminal</Options>
      </Footer>
    )
  }
}

export default onClickOutside(FooterComponent)
