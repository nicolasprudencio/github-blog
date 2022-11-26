import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '~/services/api'
import * as z from 'zod'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

export interface IssueItem {
  body: string
  title: string
  created_at: string
  comments: number
  number: number
  user: {
    login: string
  }
}

interface IssuesContextType {
  isLoading: boolean
  issues: IssueItem[]
  originalIssues: IssueItem[]
  onSubmit: SubmitHandler<{ query: string }>
}

export const IssuesContext = createContext<IssuesContextType | null>(null)

interface IssuesProviderProps {
  children: ReactNode
}

export const searchFormSchema = z.object({
  query: z.string()
})

export type searchFormProps = z.infer<typeof searchFormSchema>

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [originalIssues, setOriginalIssues] = useState<IssueItem[]>([])
  const [issues, setIssues] = useState<IssueItem[]>([])

  function onSubmit(data: searchFormProps) {
    const newIssues = originalIssues.filter((issueItem) => {
      return issueItem.title
        .toLowerCase()
        .includes(data.query.trim().toLowerCase())
    })

    if (newIssues.length === 0) {
      setIsLoading(true)
      toast.error(
        'Sua busca não tem resultado correspondente, por favor faça uma nova pesquisa!',
        {
          position: 'top-right'
        }
      )
    } else {
      setIsLoading(false)
    }

    setIssues(newIssues)
    console.log(newIssues)
  }

  async function getIssues() {
    const response = await api.get(
      'search/issues?q=repo:nicolasprudencio/github-blog'
    )

    setOriginalIssues(response.data.items)
    setIssues(response.data.items)
    setIsLoading(false)
  }

  useEffect(() => {
    getIssues()
  }, [])

  return (
    <IssuesContext.Provider
      value={{ isLoading, issues, onSubmit, originalIssues }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
