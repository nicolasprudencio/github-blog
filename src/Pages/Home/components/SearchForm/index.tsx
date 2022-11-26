import { MagnifyingGlass } from 'phosphor-react'
import { Form, Publications, SearchInput, SearchWrapper } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { searchFormProps, searchFormSchema } from '~/contexts/IssuesContext'
import { useIssues } from '~/hooks/useIssues'

export function SearchForm() {
  const { originalIssues, issues, onSubmit, isLoading } = useIssues()

  const { register, handleSubmit } = useForm<searchFormProps>({
    resolver: zodResolver(searchFormSchema)
  })

  const amountOfIssues = issues.length
  const amountOfOriginalIssues = originalIssues.length

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Publications>
        <label htmlFor="searchInput">Publicações</label>
        {isLoading ? (
          <p>carregando informações...</p>
        ) : (
          <p>
            {amountOfIssues} de {amountOfOriginalIssues} publicações
          </p>
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
