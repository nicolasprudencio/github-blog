import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  height: 18.5rem;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(4, 15, 26, 1) 3%,
    rgba(28, 47, 65, 1) 99%
  );

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    color: ${(props) => props.theme['blue-550']};
    gap: 1.25rem;

    h1 {
      font-family: 'Coda', sans-serif;
      font-weight: 400;
      font-size: 1.5rem;
    }
  }
`
