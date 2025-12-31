import './styles/App.css'
import { CssBaseline } from '@mui/material'
import { theme } from './styles/theme'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import MainLayout from './components/layout/Main'

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout />
    </MuiThemeProvider>
  )
}

export default App
