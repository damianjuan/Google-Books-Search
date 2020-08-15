import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Card, Typography, List, ListItem } from '@material-ui/core';

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

export default function Banner() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper>
                <Card className={classes.root}>
                    <List>
                        <ListItem style={{ justifyContent: 'center' }} >
                            <Typography variant="h4" className={classes.title}>(React) Google Books Search</Typography>
                        </ListItem>
                        <ListItem style={{ justifyContent: 'center' }}>
                            <Typography variant="h6" className={classes.title}>Search for and Save Books of Interest</Typography>
                        </ListItem>
                    </List>
                </Card>
            </Paper>


        </div>
    );
}