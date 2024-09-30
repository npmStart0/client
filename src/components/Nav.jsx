import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';

const pages = [   
    { name: 'אודותינו', route: '/about' },
    { name: 'דיונים', route: '/discuss' },
    { name: 'בית', route: '/home' },
];

export const Nav = () => {
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'background.default', boxShadow: 'none' }}>
                <Toolbar sx={{ borderBottom: '1px solid lightgray' ,justifyContent: 'flex-end'}} >
                    {pages.map((page) => (
                        <Button
                            key={page.name}
                            color="inherit"
                            component={Link}
                            to={page.route}>
                            {page.name}
                        </Button>
                    ))}
                    <CardMedia
                        component="img"
                        src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
                        alt="logo"
                        sx={{ width: 100, display: 'block' }} 
                    />
                </Toolbar>
            </AppBar>
        </>
    );
};
