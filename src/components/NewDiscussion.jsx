import { Box, TextField, Typography, useTheme } from '@mui/material';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ActiveControl } from './ActiveControl';

export const NewDiscussion = ({ onClose }) => {
    const theme = useTheme();

    const typhographyStyle = {
        color: theme.palette.text.primary,
        fontFamily: 'Open Sans',
        fontSize: '1.67vw',
        m: 2,
    };

    const textFieldStyle = {
        width: '80%',
        border: `1px solid ${theme.palette.grey[100]}`,
        borderRadius: 1.5
    };

    return (
        <Box
            sx={{
                border: `0.2vw solid ${theme.palette.primary.light}`,
                borderRadius: '39px',
                // height:663,
                width: '49.89%',
                mt: 15,
                boxShadow: 2,
                textAlign: 'center',

            }}
        >
            <IconButton
                onClick={onClose}
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    mt:'1%',
                    color: theme.palette.text.primary,
                }}
            >
                <CloseIcon />
            </IconButton>
            <Typography variant="h6"
                sx={{
                    color: theme.palette.primary.light,
                    fontFamily: 'Open Sans',
                    fontWeight: 700,
                    fontSize: '2.08vw',
                    mt: 7.5
                }}>
                יצירת דיון חדש
            </Typography>
            <Typography
                sx={{
                    ...typhographyStyle, ml: '36.4vw'
                }}>
                כותרת
            </Typography>
            <TextField
                size='small'
                sx={{
                    ...textFieldStyle
                }}
            />
            <Typography
                sx={{
                    ...typhographyStyle, ml: '32vw'
                }}>
                תוכן ההודעה
            </Typography>
            <TextField
                multiline
                rows={7}
                className="css-16wblaj-MuiInputBase-input-MuiOutlinedInput"
                sx={{
                    ...textFieldStyle, mb: 3
                }}
            />
            <Box sx={{ mb: 5, mr: 87.5 }}>
                <ActiveControl props={{ title: 'צור' }}></ActiveControl>
            </Box>
        </Box>
    );
};

