import { StyledHeader } from './styled/Header.styled'

export default function Header() {
  return (
    <StyledHeader>
      <h1>
        <span style={{ color: '#ff0000' }}>C</span>
        <span style={{ color: '#ffa500' }}>O</span>
        <span style={{ color: '#ffff00' }}>L</span>
        <span style={{ color: '#008000' }}>O</span>
        <span style={{ color: '#0000ff' }}>R</span>
        <span style={{ color: '#4b0082' }}>S</span>
        <span style={{ color: '#ee82ee' }}>!</span>
      </h1>
      <p>This is just a selection of color palettes I commonly use for projects.</p>
    </StyledHeader>
  )
}
