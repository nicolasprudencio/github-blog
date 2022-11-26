import styled from 'styled-components'

export const PostWrapper = styled.div`
  height: 16.25rem;
  width: 26rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: 0;
  padding: 2rem;
  gap: 1.25rem;

  border-radius: 8px;

  background: ${(props) => props.theme['blue-700']};
  transition: ease-in-out 0.2s;

  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }

  .post-title {
    min-width: 22rem;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    text-decoration: none;

    h1 {
      font-size: 1.25rem;
      font-weight: 700;

      width: 16.437rem;
      color: ${(props) => props.theme['blue-100']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['blue-400']};

      margin-top: 0.25rem;
    }
  }

  .paragraph {
    font-size: 1rem;
    color: ${(props) => props.theme['blue-300']};
    overflow: hidden;
    width: 22rem;
  }
`
