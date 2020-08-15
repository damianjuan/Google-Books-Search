import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    Button: {
        marginRight: theme.spacing(2),

    },
    title: {
        flexGrow: 1,
    },
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>Google Books</Typography>
                <Button color="inherit" href="/">Search</Button>
                <Button color="inherit" href="/saved">Saved</Button>
            </Toolbar>
        </AppBar>
    );

};