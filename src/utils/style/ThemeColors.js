import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            dark: '#297FB8',
            main: '#2666CB',
            light: '#49ACEF',
        },
        secondary: {
            dark: '#F1C40F',
            main: '#FFD823',
            light: '#FFBC39',
        },
        grey: {
            900: '#212121',
            500: '#555555',
            100: '#E0DDDD',
        },
        text: {
            primary: '#FFFFFF',
        },
        background: {
            default: '#181818',
        },
    },
});

export default theme;