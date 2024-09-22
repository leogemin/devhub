import React from 'react'
import FolderIco from "/folder.ico"
import ScisorIco from "/scisor.png"
import { Box, Container } from './styles'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Box onClick={() => navigate('/arquivos')}>
        <img src={FolderIco} />
        <h2>Arquivos</h2>
      </Box>
      <Box onClick={() => navigate('/codeframes')}>
        <img src={ScisorIco} />
        <h2>CodeFrames</h2>
      </Box>
    </Container>
  )
}

export default Home