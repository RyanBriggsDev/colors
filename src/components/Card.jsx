import { StyledCard } from './styled/Card.styled'

export default function Card({ children, bgImg, bgColor, tinted, onClick, h3Color }) {
  return (
    <StyledCard onClick={onClick} tinted={tinted} bgColor={bgColor} bgImg={bgImg} h3Color={h3Color}>
      <div>{children}</div>
    </StyledCard>
  )
}
