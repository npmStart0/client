import React from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { ContactSupportOutlined, DescriptionOutlined, Groups, PersonSearch }  from '@mui/icons-material';
import { useNavigate } from 'react-router';

export const Subject = (props) => {

    const theme = useTheme();
    const navigate = useNavigate();

    const hundleOnClick = () => {
        navigate(`?id=${props.id}`);
    };

    return (
        <Button
            onClick={hundleOnClick}
            sx={{
                width: 400,
                color: theme.palette.text.primary,
                background: 
                    `linear-gradient(
                    to right top, 
                    ${theme.palette.background.default} 50%, 
                    ${theme.palette.primary.dark})`,
                borderRadius: 5, 
                border: `solid, 2px, ${theme.palette.grey[500]}`
            }}
        >
            <Box m={3} ml={5} width={'70%'}>
                <Typography 
                    variant="h4" 
                    style={{ 
                        fontFamily: 'Open Sans',  
                        fontWeight: 'bold',
                    }}>
                    {props.name}
                </Typography>
                <Typography 
                    variant="h6" 
                    style={{
                        fontFamily: 'Open Sans',
                    }}
                >
                    דיונים {props.count}
                </Typography>
            </Box>
            <Box   
                style={{
                    color: theme.palette.secondary.dark,
                    width: '30%',
                }}
            >  
                {
                    props.name === 'קורות חיים' ? <DescriptionOutlined sx={{fontSize: 60}}/> 
                        : props.name === 'ראיונות' ? <Groups sx={{fontSize: 60}}/>
                            : props.name === 'שאלות בפיתוח' ? <ContactSupportOutlined sx={{fontSize: 60}}/>
                                : <PersonSearch sx={{fontSize: 60}}/>
                }
            </Box>

        </Button>
    );
};