import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  background-color: white;
  border: 2px #0072bb solid;
  border-radius: 0.25rem;
  color: black;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: 300ms ease-in-out;
  a {
    color: black;
    transition: 300ms ease-in-out;
  }

  &:hover {
    background-color: #0f52ba;
    border: 2px #0f52ba solid;

    a {
      color: white;
    }
  }

  ${(props) =>
    props.primary &&
    css`
      background-color: #0072bb;
      color: white;

      a {
        color: white;
      }
    `}
`
