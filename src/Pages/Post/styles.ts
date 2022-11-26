import styled from 'styled-components'

export const PostPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme['blue-900']};
`

export const PostHeader = styled.header`
  width: 54rem;
  height: 10.5rem;

  display: flex;
  flex-direction: column;

  padding: 2rem;
  border-radius: 8px;

  position: absolute;
  top: 14rem;

  background: ${(props) => props.theme['blue-800']};
`

export const PostInfoWrapper = styled.div`
  width: 50rem;
  height: 6.5rem;

  .postTitle {
    font-size: 1.5rem;
    font-weight: 700;

    margin-bottom: 0.8rem;

    color: ${(props) => props.theme['blue-100']};
  }
`
export const Navigate = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 1.25rem;

  .links {
    display: flex;
    align-items: center;

    font-size: 0.75rem;
    font-weight: 700;

    gap: 0.5rem;

    color: ${(props) => props.theme['blue-550']};
    text-decoration: none;

    transition: 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }
`

export const PostStatsWrapper = styled.div`
  display: flex;
  min-width: 34rem;
  gap: 2rem;

  .stats {
    display: flex;

    p {
      font-size: 1rem;
      font-weight: 400;
      color: ${(props) => props.theme['blue-400']};
    }
  }

  .icon {
    width: 1.125rem;
    margin-right: 0.5rem;

    color: ${(props) => props.theme['blue-400']};
  }
`

export const PostTextContainer = styled.div`
  width: 54rem;

  position: static;
  margin-top: 8rem;

  padding: 2rem;
  margin-bottom: 4rem;

  .postParagraph {
    font-size: 1rem;
    color: ${(props) => props.theme['blue-300']};
  }
`
