import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { Container } from '../components/styled/Container.styled'

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <Container>
        <h2>Styled Components</h2>
      </Container>
    </>
  )
}

export default Home
