import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Card, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            flexGrow: 1,
            align: 'center',

        },
        title: {
            flexGrow: 1,
        },
    },
}));

export default function SimplePaper() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper>
                <Card className={classes.root}>
                    <Typography align='center' variant="h4" className={classes.title}>(React) Google Books Search</Typography>
                    <Typography align='center' variant="h6" className={classes.title}>Search for and Save Books of Interest</Typography>
                </Card>
            </Paper>


        </div>
    );
}