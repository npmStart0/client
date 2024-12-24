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
        typography: {
            fonts: [
                {
                    fontFamily: 'Open Sans',
                    src: `
                        url('https://fonts.gstatic.com/s/opensans/
                            v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4iaVIGxA.woff2')
                        format('woff2')
                    `,
                },
                {
                    fontFamily: 'Fredoka',
                    src: `
                        url('https://fonts.gstatic.com/s/fredoka/
                            v14/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3O8SL8E-mKpNk.woff2')
                        format('woff2')
                    `,
                },
            ].join(',')
        },
    },
});

export default theme;