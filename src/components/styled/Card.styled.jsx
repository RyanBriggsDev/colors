import styled from 'styled-components'

export const StyledCard = styled.div`
  background-color: ${(props) => props.bgColor};
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  color: white;
  height: 12.5rem;
  background-image: url(${(props) => props.bgImg});
  background-position: center;
  background-size: cover;
  padding: 0;
  cursor: pointer;
  div {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 0.25rem;
    height: 100%;
    width: 100%;
    padding: 2rem;
    transition: background-color 300ms ease-in-out;
  }
  div:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  div > h3 {
    font-size: 3rem;
    color: ${({ h3Color }) => h3Color};
    text-decoration: underline;
  }
`
