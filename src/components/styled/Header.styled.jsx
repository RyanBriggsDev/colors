import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.comps.header.background};
  text-align: center;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: ${({ theme }) => theme.comps.h1.color};
    font-size: 5rem;
    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  p {
    color: white;
  }
`

//   &:hover {
//     background-color: red;
//   }
