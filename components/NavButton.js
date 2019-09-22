import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MuiButton from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: ({ isActive }) => ({
        borderRadius: '0',
        textTransform: 'none',
        height: '45px',
        lineHeight: '19px',
        textAlign: 'center',
        fontSize: '16px',
        minWidth: '100px',
        padding: '0 25px',
        color: isActive ? '#fff' : '#ccc',
        borderBottom: isActive ? '6px solid #00ADED': '6px solid #252526',
        fontFamily: 'Ubuntu',
        fontWeight: '300',
        '&:hover': {
            color: '#fff',
            borderBottom: '6px solid #00ADED',
        },
    }),
});

const NavButton = props => {
    const { children } = props;
    const classes = useStyles(props);
    return (
        <MuiButton disableRipple classes={classes}>
            {children}
        </MuiButton>
    );
};

export default NavButton;
