import ReactMarkdown from 'react-markdown'
import { PostWrapper } from './styles'
import { differenceInDays, parseISO } from 'date-fns'
import { useIssues } from '~/hooks/useIssues'
import { useNavigate } from 'react-router-dom'

export function HomePosts() {
  const { issues } = useIssues()
  const navigate = useNavigate()

  function onPostClick(id: number) {
    navigate(`/post/${id}`)
  }

  return (
    <>
      {issues.map((item) => {
        const postDate = parseISO(item.created_at)
        const howManyDaysPassed = differenceInDays(new Date(), postDate)
        const maxLetters = 200
        const body = item.body.substring(0, maxLetters) + '...'

        return (
          <PostWrapper
            onClick={() => onPostClick(item.number)}
            key={item.title}
          >
            <div className="post-title">
              <h1>{item.title}</h1>
              <span>{`Há ${howManyDaysPassed} ${
                howManyDaysPassed === 1 ? 'dia' : 'dias'
              }`}</span>
            </div>
            <ReactMarkdown
              children={body.replaceAll('\\r\\n', '\n')}
              className="paragraph"
            />
          </PostWrapper>
        )
      })}
    </>
  )
}
