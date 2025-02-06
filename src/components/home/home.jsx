import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import { GitHub, Code, Diversity2, Markunread } from '@mui/icons-material';
import { TextAndIcon } from './home.components/text.and.icon';
import { WhiteLine } from './home.components/white.line';
import { hexToRgbA } from '../../utils/style/convertColor'

export const Home = () => {

    const theme = useTheme();

    return (
        <>
            <Box sx={{ backgroundColor: 'background.default' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            width: '90%',
                            p: '20vh 0',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                mr: 20,
                            }}
                        >
                            <Box
                                component="img"
                                src={`${process.env.PUBLIC_URL}/images/only npm start.jpg`}
                                alt="logo"
                                sx={{
                                    display: 'block',
                                    width: '30%',
                                    mb: 3,
                                }}
                            />
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: 'Open Sans',
                                    color: theme.palette.grey[100],
                                    maxWidth: '40%',
                                    textAlign: 'right',
                                }}>
                                .אנחנו קהילה מקצועית של ג'וניוריות חרדיות בתחומי ההייטק
                                כאן תמצאי פורומים לתמיכה, שיתוף ולימוד. זה המקום לשאול
                                שאלות, לקבל תמיכה הן בקוד ופתרון באגים והן בתחומי חיפוש
                                עבודה, עם ליווי של
                                מומחיות ושיתופים של מתחילות כמוך
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                position: 'absolute',
                                zIndex: 5,
                                left: 138,
                                top: 250,
                            }}
                        >
                            <Code
                                sx={{
                                    fontSize: 250,
                                    color: 'primary.light',
                                    display: 'inline-block',
                                    opacity: 1,
                                    ml: 25,
                                }}
                            />
                        </Box>

                        <Box
                            sx={{
                                top: 20,
                                left: 150,
                                position: 'absolute',
                                width: '40%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background: `radial-gradient(circle, 
                                    ${hexToRgbA(theme.palette.primary.dark, 0.6)} 0%, 
                                    ${hexToRgbA(theme.palette.background.default, 0.3)} 70%)`,
                            }}>
                        </Box>


                    </Box>


                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                width: '65%',
                                mt: 15,
                            }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: 'Open Sans',
                                    color: 'grey.100',
                                    maxWidth: '50%',
                                    lineHeight: 1.2,
                                    mb: 2,
                                }}>
                                הדיונים שלנו: כאן מנהלים שיח פתוח על אתגרי היומיום בהייטק,
                                ניתוח סוגיות מקצועיות, ובדיקת מגמות חדשות בתחום.
                                נשמח בשיתוף תובנות אישיות, טיפים שעזרו לך, וגם דילמות שניתן ללמוד מהן יחד.
                            </Typography>
                            <Button
                                sx={{
                                    fontSize: 30,
                                    fontFamily: 'Open Sans',
                                    color: 'grey.100',
                                    borderRadius: '40px',
                                    padding: '0.5% 25px',
                                    boxShadow: `00 0 30px ${theme.palette.primary.dark}`,
                                    width: 'fit-content',
                                    backgroundColor: 'primary.light',
                                    '&:hover': {
                                        boxShadow: `0 0 50px ${theme.palette.primary.light}`,
                                    },
                                }}>
                                בואי להשפיע
                            </Button>
                        </Box>
                    </Box>


                    <Box
                        sx={{
                            m: '20vh 0',
                            width: '33%',
                            height: '15%',
                            borderRadius: '20px',
                            background:
                                `linear-gradient(to right top, 
                                ${hexToRgbA(theme.palette.background.default, 0.7)} 60%, 
                                ${hexToRgbA(theme.palette.primary.dark, 0.5)} )`,
                            border: `2px solid ${theme.palette.grey[700]}`,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 10,
                        }}>
                        <Diversity2
                            sx={{
                                color: 'secondary.main',
                                fontSize: 90,
                                borde: 'none',
                                mb: 5,
                            }}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: 'Open Sans',
                                    color: 'grey.100',
                                    textAlign: 'center',
                                    lineHeight: 1,
                                    marginBottom: '10px',
                                    ml: 10,
                                }}
                            >
                                ?
                            </Typography>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: 'Open Sans',
                                    color: 'grey.100',
                                    textAlign: 'center',
                                    lineHeight: 1,
                                    ml: 3,
                                }}
                            >
                                עדין לא מחוברת
                            </Typography>

                        </Box>
                        <Typography
                            variant="h2"
                            sx={{
                                fontFamily: 'Open Sans',
                                color: 'secondary.main',
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
                </Box >
            </Box >

            <Box 
                backgroundColor={theme.palette.background.default} 
                p={'10vh 0'}
            >
                <WhiteLine/>

                <Container 
                    maxWidth="lg"  
                    sx={{p:'5vh 0'}}
                >

                    <Box sx={{ textAlign: 'center'}}>
                        <Typography 
                            variant="h3" 
                            sx={{ 
                                fontFamily: 'Open Sans', 
                                color: theme.palette.text.primary, m: 3 
                            }}
                        >
                            אנחנו כאן בשבילך
                        </Typography>
                    </Box>

                    <Box 
                        sx={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            gap: 8, 
                            fontSize: 20, 
                            fontFamily: 'Open Sans' 
                        }}
                    >
                        <TextAndIcon 
                            text={'GitHub'} 
                            href={'https://github.com/NpmStart0'} 
                            icon={<GitHub/>} 
                        />  
                        <TextAndIcon 
                            text={'npmstart2@gmail.com'} 
                            href={'mailto:npmstart2@gmail.com'} 
                            icon={<Markunread/>} 
                        />
                    </Box>

                </Container>

                <WhiteLine/>
            </Box>
        </>
    );
};
