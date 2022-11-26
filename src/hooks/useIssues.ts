import { useContext } from 'react'
import { IssuesContext } from '~/contexts/IssuesContext'

export const useIssues = () => {
  const data = useContext(IssuesContext)

  if (data === null)
    throw new Error(
      'Não é possível utilizar o hook useIssues sem o IssuesProvider'
    )
  return data
}
