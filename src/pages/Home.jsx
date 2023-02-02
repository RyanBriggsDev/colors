import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { Container } from '../components/styled/Container.styled'
import Card from '../components/Card'
import { StyledFlex } from '../components/styled/Flex.styles'
import portfolio from '../assets/images/portfolio.jpg'
import certifyFullLogo from '../assets/images/certifyFullLogo.png'
import wrongmove from '../assets/images/wrongmove.jpg'

function Home() {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <Container>
        <StyledFlex direction="column" gap="2rem" margin="4rem">
          <Card bgImg={portfolio} tinted onClick={() => navigate('/portfolio')}>
            <h3>Portfolio</h3>
          </Card>
          <Card h3Color="#00DEB6" bgImg={wrongmove} tinted onClick={() => navigate('/wrongmove')}>
            <h3>Wrongmove</h3>
          </Card>
          <Card h3Color="#0072bb" bgImg={certifyFullLogo} tinted onClick={() => navigate('/certify')}>
            <h3>Certify</h3>
          </Card>
        </StyledFlex>
      </Container>
    </>
  )
}

export default Home
