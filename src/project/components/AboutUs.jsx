import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const AboutUs = () => {
    return (
        <Box sx={{
            backgroundColor: 'background.default',
        }}>
            <Container sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="logo" style={{ display: 'block', marginRight: 'auto', marginLeft: 'auto' }} />
                <Typography variant="h2" style={{ fontFamily: 'zrima' }} sx={{ color: 'grey.100' }}>
                    ...האתר בשלבי פיתוח
                </Typography>
                <Typography variant="h4" style={{ fontFamily: 'Courier Prime' }} sx={{ color: 'grey.100' }}>
                    <Link href="https://github.com/NpmStart0" target="_blank" underline="hover" sx={{ color: 'primary.main' }}>
                        Github
                    </Link>
                    מפתחים? עקבו אחרינו ב
                </Typography>
                <Typography variant="h5" style={{ fontFamily: 'zrima', marginTop: '20px' }} sx={{ color: 'grey.100' }}>
                    <Link href="mailto:npmstart2@gmail.com" underline="hover" sx={{ color: 'primary.main' }}>
                        npmstart2@gmail.com
                    </Link>
                    ג'ונרית? רוצה להיות חלק מהצוות המוביל? צרי איתנו קשר
                </Typography>
            </Container>
        </Box>
    );
};
