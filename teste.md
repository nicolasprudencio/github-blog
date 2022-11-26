----HOME-----

import {
ContentWrapper,
HomeContainer,
ProfileContainer,
ProfileStats,
UserInformation
} from './styles'
import githubLink from '~/assets/icons/link.svg'
import githubLogo from '~/assets/icons/github.svg'
import followers from '~/assets/icons/followers.svg'
import { SearchForm } from './components/SearchForm'
import { HomePosts, postProps } from './components/HomePosts'
import { api } from '~/services/api'
import { useEffect, useState } from 'react'

interface profileProps {
login: string
avatar_url: string
html_url: string
bio: string
followers: number
}

// interface issuesProps {
// title: string
// body: string
// created_at: Date
// comments: number
// user: {
// login: string
// }
// }

export function Home() {
const [profileInformation, setProfileInformation] = useState<profileProps>({
login: '',
avatar_url: '',
html_url: '',
bio: '',
followers: 0
})

const [issues, setIssues] = useState<postProps>()

async function getUserProfileInformation() {
const response = await api.get(`users/nicolasprudencio`)

    // console.log(response.data)
    setProfileInformation(response.data)

}

async function getIssues() {
const response = await api.get(
'search/issues?q=repo:nicolasprudencio/github-blog'
)

    setIssues(response.data.items)
    // console.log(issues)

}

useEffect(() => {
getUserProfileInformation()
getIssues()
}, [])

const profileFollowers = profileInformation.followers
const profileUser = profileInformation.login
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
<h1 key={profileUser}>{profileUser}</h1>

              <a href={profileInformation.html_url}>
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
        <SearchForm issues={issues} />
        <HomePosts items={issues} />
      </ContentWrapper>
    </HomeContainer>

)
}

----HOME POSTS-----

import ReactMarkdown from 'react-markdown'
import { PostsContainer, PostWrapper } from './styles'
import { differenceInDays, parseISO } from 'date-fns'

export interface postProps {
issues: []
items: [{ body: string; title: string; created_at: string }]
}

export function HomePosts({ items }: postProps) {
// console.log(items)

return (
<>
{items?.map((item) => {
const postDate = parseISO(item.created_at)
const howManyDaysPassed = differenceInDays(new Date(), postDate)

        return (
          <PostsContainer key={item.title}>
            <PostWrapper>
              <div className="post-title">
                <h1>{item.title}</h1>
                <span>{`Há ${howManyDaysPassed} ${
                  howManyDaysPassed > 1 ? 'dias' : 'dia'
                }`}</span>
              </div>
              <ReactMarkdown
                children={item.body?.replaceAll('\\r\\n', '\n')}
                className="paragraph"
              />
            </PostWrapper>
          </PostsContainer>
        )
      })}
    </>

)
}

----SEARCH FORM-----

import { MagnifyingGlass } from 'phosphor-react'
import { Form, Publications, SearchInput, SearchWrapper } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import \* as z from 'zod'
import { postProps } from '../HomePosts'

export function SearchForm({ issues }: postProps) {
const searchFormSchema = z.object({
query: z.string()
})

const { register, handleSubmit } = useForm<searchFormProps>({
resolver: zodResolver(searchFormSchema)
})

type searchFormProps = z.infer<typeof searchFormSchema>

// console.log(issues)

const amountOfIssues = issues?.length

function onSubmit(data: searchFormProps) {
console.log(data.query)
}

console.log(issues)

return (

<Form onSubmit={handleSubmit(onSubmit)}>
<Publications>
<label htmlFor="searchInput">Publicações</label>

        {amountOfIssues > 1 ? (
          <p>{amountOfIssues} publicações</p>
        ) : (
          <p>{amountOfIssues} publicação</p>
        )}
      </Publications>
      <SearchWrapper>
        <SearchInput
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
        <button type="submit">
          <MagnifyingGlass size={20} />
          <strong>Buscar</strong>
        </button>
      </SearchWrapper>
    </Form>

)
}
