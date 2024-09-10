import './App.css';
import { Main } from './project/components/Main';
import { ThemeProvider } from '@mui/material/styles';
import theme from './project/ThemeColors'; // ייבוא הנושא

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main></Main>
    </ThemeProvider>
  );
}

export default App;
