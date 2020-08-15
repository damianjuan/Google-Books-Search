import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Card, Typography, List, ListItem, TextField } from '@material-ui/core';

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
        input: {
            margin: theme.spacing(1),
            width: '90px',
        },

    },
}));

export default function SearchForm() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper>
                <Card className={classes.root}>
                    <List>
                        <ListItem style={{ justifyContent: 'left' }} >
                            <Typography variant="h6" className={classes.title}>Books Search</Typography>
                        </ListItem>
                        <ListItem style={{ justifyContent: 'left' }}>
                            <form noValidate autoComplete="off" className={classes.input}>
                                <TextField id="outlined-basic" label="Search" variant="outlined" />
                            </form>
                        </ListItem>
                    </List>
                </Card>
            </Paper>


        </div>
    );
}