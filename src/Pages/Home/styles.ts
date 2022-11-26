import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['blue-900']};
`

export const ContentWrapper = styled.div`
  width: 54rem;
  flex-direction: column;
  max-width: 1120px;

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }

  .loader {
    animation: is-rotating 1s infinite;
    width: 50px;
    height: 50px;
    border: 6px solid ${(props) => props.theme['blue-500']};
    border-bottom-color: ${(props) => props.theme['blue-400']};
    border-radius: 50%;

    position: absolute;
    margin-top: 5rem;
    left: 47%;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  position: absolute;
  top: 14rem;

  width: 54rem;
  height: 13.25rem;

  border-radius: 8px;
  background: ${(props) => props.theme['blue-800']};

  .profile-photo {
    height: 9.25rem;
    width: 9.25rem;

    border-radius: 8px;
    margin-right: 2rem;
  }
`

export const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  height: 8.812rem;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;

    margin-bottom: 0.5rem;

    color: ${(props) => props.theme['blue-100']};
  }

  .user-hub {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 38.25rem;

    a {
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;

      color: ${(props) => props.theme['blue-550']};

      img {
        margin-left: 0.5rem;
      }

      &:hover {
        filter: brightness(0.8);
        transition: 0.2s;
      }
    }
  }

  .paragraph {
    font-size: 1rem;
    color: ${(props) => props.theme['blue-300']};
    overflow-y: hidden;
    margin-bottom: 1.5rem;
  }
`

export const ProfileStats = styled.div`
  display: flex;
  align-items: center;

  gap: 1.5rem;

  div {
    display: flex;

    p {
      font-size: 1rem;
      color: ${(props) => props.theme['blue-200']};
    }
  }

  .icon {
    width: 1.125rem;
    margin-right: 0.5rem;

    color: ${(props) => props.theme['blue-500']};
  }
`

export const PostsContainer = styled.section`
  width: 54rem;
  display: flex;
  flex-wrap: wrap;

  position: static;
  margin-top: 23rem;
  margin-bottom: 14.625rem;

  gap: 2rem;
`
