import { StyledButton } from './styled/Button.styled'
import { Link } from 'react-router-dom'

export default function Button({ children, primary, external, internal, href, onClick }) {
  if (external)
    return (
      <StyledButton>
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      </StyledButton>
    )

  if (internal) {
    return (
      <StyledButton primary={primary}>
        <Link to={href}>{children}</Link>
      </StyledButton>
    )
  }

  return <StyledButton onClick={onClick}>{children}</StyledButton>
}
