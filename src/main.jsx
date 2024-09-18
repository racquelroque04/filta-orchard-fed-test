import { createTheme, ThemeProvider } from '@mui/material';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../src/sass/_fonts.scss';

const theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: 'OpenSans Light',
    margin: '8px 0px',
    h1: {
      fontFamily: 'OpenSans Light',
      fontSize: 40,
      margin: '8px 0px',
    },
    h2: {
      fontFamily: 'OpenSans Light',
      fontSize: 26,
      margin: '8px 0px',
    },
    h3: {
      fontFamily: 'OpenSans Light',
      fontSize: 22,
      margin: '8px 0px',
    },
    caution: {
      fontFamily: 'OpenSans Regular',
      fontSize: 16,
      fontWeight: 700,
      margin: '8px 0px',
      color: 'red'
    }

  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
