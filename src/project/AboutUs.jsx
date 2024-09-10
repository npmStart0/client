import { Box, Typography, Link } from '@mui/material';

export const AboutUs = () => {
    return (
        <Box sx={{
            backgroundColor: 'background.default', 
            height: '100vh', 
            // width: '100vw', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            padding: '20px',
            boxSizing: 'border-box', // Make sure the margins are included in the width and height
        }}>
             <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="logo" style={{ display:'block', marginRight: 'auto', marginLeft: 'auto' }} />
            <Typography variant="h2" style={{ fontFamily: 'zrima' }} sx={{color: 'grey.100'}}>
                ...האתר בשלבי פיתוח
            </Typography>
            <Typography variant="h4" style={{ fontFamily: 'Courier Prime' }} sx={{color: 'grey.100'}}>
                <Link href="https://github.com/NpmStart0" target="_blank" underline="hover" sx={{color: 'primary.main'}}>
                    Github
                </Link> 
                מפתחים? עקבו אחרינו ב
            </Typography>
            <Typography variant="h5" style={{ fontFamily: 'zrima', marginTop: '20px' }} sx={{color: 'grey.100'}}>
                <Link href="mailto:npmstart2@gmail.com" underline="hover" sx={{color: 'primary.main'}}>
                    npmstart2@gmail.com
                </Link> 
                ג'ונרית? רוצה להיות חלק מהצוות המוביל? צרי איתנו קשר
            </Typography>
        </Box>
    );
};
