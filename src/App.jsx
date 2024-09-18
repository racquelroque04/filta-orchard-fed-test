import './App.css'
import { Container } from '@mui/material';
import MainSection from './components/MainSection';
import BottomSection from './components/BottomSection';

function App() {
  return (
    <Container maxWidth={false}>
      <MainSection />
      <BottomSection />
    </Container>
  )
}

export default App
