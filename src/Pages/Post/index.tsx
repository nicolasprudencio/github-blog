import { Link, useParams } from 'react-router-dom'
import {
  PostPageContainer,
  PostHeader,
  PostInfoWrapper,
  Navigate,
  PostStatsWrapper,
  PostTextContainer
} from './styles'
import left from '~/assets/icons/left.svg'
import link from '~/assets/icons/link.svg'
import calendar from '~/assets/icons/calendar.svg'
import githubLogo from '~/assets/icons/github.svg'
import comments from '~/assets/icons/chat.svg'
import ReactMarkdown from 'react-markdown'
import { IssueItem } from '~/contexts/IssuesContext'
import { differenceInDays, parseISO } from 'date-fns'
import { api } from '~/services/api'
import { useEffect, useState } from 'react'

export function Post() {
  const { postNumber } = useParams()
  const [post, setPost] = useState<IssueItem>()

  const postDate = parseISO(post ? post.created_at : '')
  const howManyDaysPassed = differenceInDays(new Date(), postDate)

  async function fetchPost() {
    const response = await api.get(
      `repos/nicolasprudencio/github-blog/issues/${postNumber}`
    )

    setPost(response.data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <>
      {post && (
        <PostPageContainer key={post?.title}>
          <PostHeader>
            <PostInfoWrapper>
              <Navigate>
                <Link to="/" className="links">
                  <img src={left} alt="Back to home page" /> VOLTAR
                </Link>
                <a
                  href={`https://github.com/nicolasprudencio/github-blog/issues/${postNumber}`}
                  className="links"
                  target="_blank"
                >
                  VER NO GITHUB
                  <img src={link} alt="Github Link Post" />
                </a>
              </Navigate>
              <h1 className="postTitle">{post.title}</h1>
            </PostInfoWrapper>
            <PostStatsWrapper>
              <div className="stats">
                <img src={githubLogo} alt="Logo github" className="icon" />
                <p>{post.user.login}</p>
              </div>
              <div className="stats">
                <img src={calendar} alt="calendar icon" className="icon" />
                <p>{`Há ${howManyDaysPassed} ${
                  howManyDaysPassed > 1 ? 'dias' : 'dia'
                }`}</p>
              </div>
              <div className="stats">
                <img src={comments} alt="comments icon" className="icon" />
                <p>{post.comments} comentários</p>
              </div>
            </PostStatsWrapper>
          </PostHeader>
          <PostTextContainer>
            <ReactMarkdown
              children={post.body.replaceAll('\\r\\n', '\n')}
              className="postParagraph"
            />
          </PostTextContainer>
        </PostPageContainer>
      )}
    </>
  )
}
