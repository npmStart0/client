import { createTheme } from '@mui/material/styles';

// יצירת נושא עם הצבעים הגלובליים
const theme = createTheme({
  palette: {
    primary: {
      dark: '#297FB8',  // תכלת כהה
      main: '#3598DB',  // תכלת רגיל
      light: '#49ACEF', // תכלת בהיר
    },
    secondary: {
      dark: '#F1C40F',  // צהוב כהה
      main: '#FFD823',  // צהוב רגיל
      light: '#FFBC39', // צהוב בהיר
    },
    text: {
      primary: '#555555', // אפור רגיל
    },
    background: {
      default: '#696969', // אפור כהה (שחור רגיל)
    },
  },
});

export default theme;
