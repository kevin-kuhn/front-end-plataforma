import { ThemeProvider } from '@mui/material/styles'

import theme from './styles/theme'

import Board from './ui/components/board/index'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Board />
    </ThemeProvider>
  )
}

export default App
