import { Box, Button, Container, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import CodeIcon from '@mui/icons-material/Code';
import Diversity2Icon from '@mui/icons-material/Diversity2';

export const Home = () => {
    return (
        <>
            <Box sx={{ backgroundColor: 'background.default', position: 'relative' }}>
                <Container
                    sx={{
                        height: '200vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '7%',
                            right: '10%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            width: '40%',
                        }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/only npm start.jpg`}
                            alt="logo"
                            style={{
                                display: 'block',
                                width: '50%',
                                marginBottom: '20px',
                            }}
                        />
                        <Typography
                            variant="h5"
                            style={{ fontFamily: 'zrima', textAlign: 'right' }}
                            sx={{
                                color: 'grey.100',
                                maxWidth: '80%',
                                lineHeight: 1.2,
                            }}>
                            אנחנו קהילה מקצועית של ג'וניוריות חרדיות בתחומי ההייטק <br />
                            כאן תמצאי פורומים לתמיכה, שיתוף ולימוד. זה המקום לשאול
                            שאלות, לקבל תמיכה הן בקוד ופתרון באגים והן בתחומי חיפוש
                            עבודה, עם ליווי של
                            מומחיות ושיתופים של מתחילות כמוך
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '3%',
                            left: '9%',
                            width: '40%',
                            height: '30%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textShadow: `
            0 0 50px #49ACEF,
            0 0 100px #49ACEF,
            0 0 200px #49ACEF,
            0 0 300px #49ACEF`,
                        }}
                    >
                        <CodeIcon
                            sx={{
                                width: '80%',
                                height: '80%',
                                filter: `
                drop-shadow(0 0 100px #49ACEF)
                drop-shadow(0 0 100px #49ACEF)
                drop-shadow(0 0 300px #49ACEF)
                drop-shadow(0 0 400px #49ACEF)`,
                                color: '#49ACEF',
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '45%',
                            left: '40%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            width: '38%',
                        }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: 'zrima',
                                color: 'grey.100',
                                maxWidth: '90%',
                                lineHeight: 1.2,
                                mb: 2, 
                            }}>
                            הדיונים שלנו: כאן מנהלים שיח פתוח על אתגרי היומיום בהייטק,
                            ניתוח סוגיות מקצועיות, ובדיקת מגמות חדשות בתחום.
                            נשמח בשיתוף תובנות אישיות, טיפים שעזרו לך, וגם דילמות שניתן ללמוד מהן יחד.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                fontSize: '2rem',
                                fontFamily: 'zrima',
                                color: 'grey.100',
                                borderRadius: '40px',
                                padding: '0.5% 25px',
                                boxShadow: `
                                0 0 100px #49ACEF`,
                                width: 'fit-content',
                                backgroundColor: 'primary.light',
                                '&:hover': {
                                    boxShadow: `
                                    0 0 50px #49ACEF`,
                                },
                            }}>
                            בואי להשפיע
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '74%', 
                            left: '50%',
                            transform: 'translate(-50%, -50%)', 
                            width: '33%',
                            height: '15%',
                            borderRadius: '20px', 
                            background: 'linear-gradient(to bottom left, #297FB8, #181818, #181818, #181818)', 
                            border: '2px solid #FFFFFF', 
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '5%',
                        }}>
                        <Diversity2Icon
                            sx={{
                                color: 'secondary.main', 
                                fontSize: '3rem', 
                            }} />
                        <br></br>
                        <Box
                            sx={{
                                display: 'flex', 
                                justifyContent: 'center', 
                            }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: 'zrima',
                                    color: 'grey.100',
                                    textAlign: 'center',
                                    lineHeight: 1,
                                    marginBottom: '10px',
                                }}
                            >
                                ?
                            </Typography>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: 'zrima',
                                    color: 'grey.100',
                                    textAlign: 'center',
                                    lineHeight: 1,
                                }}
                            >
                                עדין לא מחוברת
                            </Typography>

                        </Box>
                        <Typography
                            variant="h2"
                            sx={{
                                fontFamily: 'zrima',
                                color: '#FFBC39', 
                                textAlign: 'right', 
                                lineHeight: 1,
                                width: '40%', 
                                alignSelf: 'flex-start', 
                                marginLeft: '10%', 
                            }}
                        >
                            הצטרפי
                        </Typography>
                    </Box>
                </Container >
            </Box >

            <Box sx={{ borderTop: '1px solid white', backgroundColor: 'background.default', padding: '2%' }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', marginBottom: '10px' }}>
                        <Typography variant="h3" style={{ fontFamily: 'zrima', color: 'white' }}>
                            אנחנו כאן בשבילך
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <a href="https://github.com/NpmStart0" style={{ color: 'white', textDecoration: 'underline' }}>
                            https://github.com/NpmStart0 <GitHubIcon />
                        </a>
                        <a href="mailto:npmstart2@gmail.com" style={{ color: 'white', textDecoration: 'underline' }}>
                            npmstart2@gmail.com <MarkunreadIcon />
                        </a>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ borderTop: '1px solid white', backgroundColor: 'background.default', padding: '20px', height: '150px' }}>

            </Box>
        </>
    );
};
