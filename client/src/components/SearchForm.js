import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Card, Typography, List, ListItem, TextField, Button, Input, InputLabel, FormControl } from '@material-ui/core';

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
                        <ListItem>

                            <FormControl fullWidth className={classes.margin} variant="filled">
                                <InputLabel>Search</InputLabel>
                                <Input />
                            </FormControl>
                        </ListItem>
                        <ListItem style={{ alignContent: 'right' }}>
                            <Button className={classes.margin} variant="contained" color="primary">Search</Button>
                        </ListItem>
                    </List>
                </Card>
            </Paper>


        </div>
    );
}