import './App.css';
import { Main } from './components/Main';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/style/ThemeColors';

const App = () => {  
    return (
        <ThemeProvider theme={theme}>
            <Main></Main>
        </ThemeProvider>
    );
};

export default App;