import styled from 'styled-components'

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
`
