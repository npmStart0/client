import { Box, Typography, Link } from '@mui/material';

export const Home = () => {
    return (
        <Box sx={{
            backgroundColor: '#181818', 
            height: '100vh', 
            // width: '100vw', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            padding: '20px',
            boxSizing: 'border-box', // לוודא שהשוליים נכללים ברוחב ובגובה
        }}>
             <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="logo" style={{ display:'block', marginRight: 'auto', marginLeft: 'auto' }} />
            <Typography variant="h2" style={{ color: '#E0DDDD', fontFamily: 'zrima' }}>
                ...האתר בשלבי פיתוח
            </Typography>
            <Typography variant="h4" style={{ color: '#E0DDDD', fontFamily: 'Courier Prime' }}>
                <Link href="https://github.com/NpmStart2" target="_blank" underline="hover" style={{ color: '#2666CB' }}>
                    Github
                </Link> 
                מפתחים? עקבו אחרינו ב
            </Typography>
            <Typography variant="h5" style={{ color: '#E0DDDD', fontFamily: 'zrima', marginTop: '20px' }}>
                <Link href="mailto:npmstart2@gmail.com" underline="hover" style={{ color: '#2666CB' }}>
                    npmstart2@gmail.com
                </Link> 
                ג'ונרית? רוצה להיות חלק מהצוות המוביל? צרי איתנו קשר
            </Typography>
        </Box>
    );
};
