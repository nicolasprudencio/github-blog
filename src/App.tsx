import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/deafultTheme'
import 'react-toastify/dist/ReactToastify.min.css'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer closeOnClick />
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}
