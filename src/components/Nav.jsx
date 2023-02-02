import { Container } from './styled/Container.styled'
import { StyledNav } from './styled/Nav.styled'
import Button from './Button'

export default function Nav() {
  return (
    <StyledNav>
      <Container>
        <div>
          <Button primary internal href="/">
            Home
          </Button>
          <Button external href="https://ryanbriggs.dev">
            Portfolio
          </Button>
        </div>
      </Container>
    </StyledNav>
  )
}
