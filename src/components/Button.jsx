import { StyledButton } from './styled/Button.styled'
import { useNavigate } from 'react-router-dom'

export default function Button({ children, primary, external, internal, href, onClick }) {
  const navigate = useNavigate()
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
      <StyledButton primary={primary} onClick={() => navigate(`${href}`)}>
        {children}
      </StyledButton>
    )
  }

  return <StyledButton onClick={onClick}>{children}</StyledButton>
}
