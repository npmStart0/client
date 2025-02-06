import { Box, Link, useTheme } from '@mui/material';
import React from 'react';

export const TextAndIcon = ({href, text , icon}) => {

    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'center',
            }}
        >
            <Link
                href={href}
                sx={{
                    color: theme.palette.text.primary,
                    textDecoration: 'underline',
                    '&:hover': {
                        color: theme.palette.primary.light,
                    }
                }}
            >
                {text}
            </Link>
            {icon && React.cloneElement(icon, {
                sx: {
                    color: theme.palette.text.primary,
                    fontSize: 35,
                }
            })}
        </Box>
    );
};