import { createTheme } from '@mui/material/styles';

// Creating a theme with global colors
const theme = createTheme({
  palette: {
    primary: {
      dark: '#297FB8',  // Dark cyan
      main: '#2666CB',  // Regular cyan
      light: '#49ACEF', // Light cyan
    },
    secondary: {
      dark: '#F1C40F',  // Dark yellow
      main: '#FFD823',  // Regular yellow
      light: '#FFBC39', // Light yellow
    },
    grey: {
      900: '#212121', // Very dark grey
      500: '#555555', // Regular grey
      100: '#E0DDDD', // Light grey
    },
    text: {
      primary: '#FFFFFF', // White text color
    },
    background: {
      default: '#181818', // Dark grey (regular black)
    },
  },
});

export default theme;
