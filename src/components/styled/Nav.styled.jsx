import styled from 'styled-components'

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.comps.nav.background};
  color: ${({ theme }) => theme.comps.nav.color};

  div {
    padding: 0.25rem 1rem;
  }

  div > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
