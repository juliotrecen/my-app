import React from 'react'


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Notifications from './Notifications';
import Account from './Account';
import {Box} from '@material-ui/core';
import WritePost from './WritePost';

const useStyles = makeStyles({
    appBar : { 
        boxShadow : 'none',
    },

    img: {
        maxHeight: '55px',
    },
    grow : {
        flexGrow: 1,
    },
    userSection : {
        display: 'flex',
        alignItems: 'center',
    },

});


function Header() {
    const classes = useStyles();

    return (
        <AppBar position = 'fixed' color = 'inherit' className = {classes.appBar}>
            <Toolbar>
                <img src = "/images/logo_1.png" alt = "logo" className = {classes.img} />
                <div className = {classes.grow} />
                <div className = {classes.userSection}>
                <WritePost></WritePost>
                <Box ml = {2}>
                    <Notifications></Notifications>

                    </Box>
                <Box ml = {2}>
                    <Account /> 
                </Box>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;