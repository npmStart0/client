import React from 'react';
import { Button, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router';

const typographyStyle = {
    fontFamily: 'Open Sans',
    marginLeft: 4,
    marginRight: 4,
    fontWeight: 700,
    letterSpacing: 1.3,
    fontSize: '1.42em',

};

export const Discussion = ({ props }) => {

    const theme = useTheme();

    const navigate = useNavigate();

    const hundleOnClick = () => {
        navigate(`?id=${props.id}`);
    };


    return (

        <Button variant="contained" color="primary" onClick={hundleOnClick}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: 947,
                height: 74,
                marginTop: 3,
                padding: 1.5,
                color: theme.palette.text.primary,
                background: `linear-gradient(
                            to right top,
                            ${theme.palette.background.default} 50%,
                            ${theme.palette.primary.dark})`,
                borderRadius: '23px',
                border: `solid 1.5px ${theme.palette.grey[100]}`
            }}>
            <Typography sx={typographyStyle}>
                {props.comments[props.comments.length - 1].date.toLocaleDateString()} :תגובה אחרונה
            </Typography>
            <Typography sx={{ ...typographyStyle, marginLeft: -25, direction: 'rtl' }}>
                {props.comments.length}  תגובות
            </Typography>
            <Typography sx=
                {{ ...typographyStyle, fontSize: '2.3em' }}>
                {props.name}
            </Typography>
        </Button>
    );
};