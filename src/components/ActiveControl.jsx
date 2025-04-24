import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';

export const ActiveControl = ({ props, onOpen}) => {
    const theme = useTheme();

    return (
        <Button
            onClick={onOpen}
            sx={{
                fontFamily: 'Open Sans',
                backgroundColor: theme.palette.text.link,
                borderRadius: '182.5px',
                paddingTop:0.2,
                paddingBottom:0.2,
                color:'white',
                paddingRight:2.4,
                paddingLeft:2.4
            }}
        >
            {props.title}
        </Button>
    );
};
