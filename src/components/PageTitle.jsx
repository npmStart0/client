import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

export const PageTitle = ({ props }) => {
    const theme = useTheme();
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="80vh"
                width="60vw"
                textAlign="center"
                sx={{
                    background: `radial-gradient(circle,
                    ${theme.palette.primary.dark} 0%, ${theme.palette.background.default} 70%)`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Typography
                    variant="h2"
                    component="p"
                    sx={{
                        paddingTop: '50px',
                        paddingBottom: '10px',
                        fontFamily: 'Fredoka',
                        textUnderlinePosition: 'from-font',
                        textDecorationSkipInk: 'none',
                        color: 'text.primary',
                    }}
                >
                    {props.title}
                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            fontFamily: 'Fredoka',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none',
                            color: 'secondary.light',
                        }}
                    >
                        {props.subtitle}
                    </Typography>
                </Typography>
            </Box>
        </Box>
    );
};
