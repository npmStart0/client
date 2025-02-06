import { Box, Typography, Button } from '@mui/material';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            textAlign: 'center',
            minHeight: '100vh',
            width: '100%',
            margin: 0,
        }}
        >
            <Typography variant="h1" sx={{
                fontFamily: 'Fredoka',
                color: theme.palette.primary.light,
            }}>
                404
            </Typography>
            <Typography variant="h4" sx={{
                fontFamily: 'Open Sans',
                color: theme.palette.text.primary,
            }}
            >
                הדף לא נמצא
            </Typography>
            <Box sx={{
                mb: 2,
                mt: 2
            }}>
                <ImageSearchIcon sx={{
                    color: theme.palette.secondary.dark,
                }} />
            </Box>
            <Typography variant="body1" sx={{
                fontFamily: 'Open Sans',
                color: theme.palette.text.primary,
            }}>
                ...מצטערים, אבל לא הצלחנו למצוא את הדף שאתה מחפש
            </Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate('/home')}
                    sx={{
                        fontFamily: 'Fredoka',
                        color: theme.palette.secondary.dark,
                        borderRadius: '30px',
                    }}
                >
                    חזרה לדף הבית
                </Button>
            </Typography>
        </Box>
    );
};
