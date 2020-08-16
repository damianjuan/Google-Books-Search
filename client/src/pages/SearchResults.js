import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import ResultsCard from '../components/ResultsCard';

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
            margin: theme.spacing(3),
        },

    },
}));

export default function SearchResults(books) {
    const classes = useStyles();
    const booksToRender = books.books;
    return (
        <div className={classes.root}>
            <Paper>
                <Typography variant="h6" className={classes.title}>Results</Typography>
                <Grid container spacing={4}>
                    {booksToRender.map(res =>
                        <Grid item xs={12} sm={6} md={4}>
                            <ResultsCard book={res} />
                        </Grid>
                    )}

                </Grid>
            </Paper>
        </div>
    );

}