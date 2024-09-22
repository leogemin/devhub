import React from 'react'
import onClickOutside from 'react-onclickoutside'
import { Footer, Options } from './styles'

class FooterComponent extends React.Component { // ISSO DEU MUUUITO TRABALHO PQP
  handleClickOutside = () => {
    this.props.onClose()
  }

  render() {
    const { visible } = this.props

    return (
      <Footer style={{ visibility: visible ? 'visible' : 'hidden' }}>
        <Options>Rename</Options>
        <Options>Open With VSCode</Options>
        <Options>Terminal</Options>
      </Footer>
    )
  }
}

export default onClickOutside(FooterComponent)
