import { Divider, useTheme } from '@mui/material';

export const WhiteLine = () => {

    const theme = useTheme();
    
    return(
        <Divider sx={{ height: '0.5px' }} color={theme.palette.grey[500]} />
    );
};

