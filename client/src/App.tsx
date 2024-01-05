import { Container } from '@mui/material';
import './App.css';
import { CryptoData } from './components';

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <CryptoData />
      </Container>
    </div>
  );
}

export default App;
