import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 54rem;

  position: absolute;
  top: 32rem;
`

export const Publications = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 47rem;
  margin-bottom: 0.75rem;

  label {
    font-size: 1.25;
    font-weight: bold;
    color: ${(props) => props.theme['blue-200']};
  }

  p {
    font-size: 0.75rem;
    color: ${(props) => props.theme['blue-400']};
  }
`

export const SearchWrapper = styled.div`
  width: 54rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 3.125rem;

    padding: 0.5rem;

    border: none;
    border-radius: 8px;

    background: ${(props) => props.theme['blue-600']};

    color: ${(props) => props.theme['blue-300']};
    transition: 0.2s ease-in-out;

    strong {
      font-size: 1rem;
    }

    svg {
      margin: 0.35rem;
    }

    &:hover {
      background: ${(props) => props.theme['blue-300']};
      color: ${(props) => props.theme['blue-600']};
      cursor: pointer;
    }
  }
`

export const SearchInput = styled.input`
  width: 48rem;
  height: 3.125rem;

  margin-right: 1rem;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['blue-600']};

  background: ${(props) => props.theme['blue-1000']};
  color: ${(props) => props.theme['blue-200']};

  &::placeholder {
    font-size: 1rem;
    color: ${(props) => props.theme['blue-500']};
  }
`
