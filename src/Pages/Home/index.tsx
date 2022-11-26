import {
  ContentWrapper,
  HomeContainer,
  ProfileContainer,
  ProfileStats,
  UserInformation,
  PostsContainer
} from './styles'
import githubLink from '~/assets/icons/link.svg'
import githubLogo from '~/assets/icons/github.svg'
import followers from '~/assets/icons/followers.svg'
import { SearchForm } from './components/SearchForm'
import { HomePosts } from './components/HomePosts'
import { api } from '~/services/api'
import { useEffect, useState } from 'react'
import { useIssues } from '~/hooks/useIssues'

interface profileProps {
  login: string
  name: string
  avatar_url: string
  html_url: string
  bio: string
  followers: number
}

export function Home() {
  const [profileInformation, setProfileInformation] = useState<profileProps>({
    login: '',
    name: '',
    avatar_url: '',
    html_url: '',
    bio: '',
    followers: 0
  })

  const { isLoading } = useIssues()

  async function getUserProfileInformation() {
    const response = await api.get(`users/nicolasprudencio`)

    // console.log(response.data)
    setProfileInformation(response.data)
  }

  useEffect(() => {
    getUserProfileInformation()
  }, [])

  const profileFollowers = profileInformation.followers
  const profileUser = profileInformation.login
  const profileName = profileInformation.name
  const profileBio = profileInformation.bio

  return (
    <HomeContainer>
      <ContentWrapper>
        <ProfileContainer>
          <img
            className="profile-photo"
            src={profileInformation.avatar_url}
            alt="Profile-photo"
          />
          <UserInformation>
            <div className="user-hub">
              <h1 key={profileUser}>{profileName}</h1>

              <a href={profileInformation.html_url} target="_blank">
                GITHUB
                <img src={githubLink} alt="Github-Profile" />
              </a>
            </div>
            <p className="paragraph">{profileBio}</p>
            <ProfileStats>
              <div>
                <img className="icon" src={githubLogo} alt="user-name" />
                <p>{profileUser}</p>
              </div>
              <div>
                <img className="icon" src={followers} alt="Followers" />
                <p>
                  {profileFollowers}{' '}
                  {profileFollowers > 1 ? 'seguidores' : 'seguidor'}
                </p>
              </div>
            </ProfileStats>
          </UserInformation>
        </ProfileContainer>
        <SearchForm />
        <PostsContainer>
          {isLoading ? <div className="loader" /> : <HomePosts />}
        </PostsContainer>
      </ContentWrapper>
    </HomeContainer>
  )
}
