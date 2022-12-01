import { HeaderContainer } from './styles'
import github from '/terminal.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={github} alt="Logo" />
        <h1>GITHUB BLOG</h1>
      </div>
    </HeaderContainer>
  )
}
