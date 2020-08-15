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

export default function SearchResults() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper>
                <Typography variant="h6" className={classes.title}>Results</Typography>
                <Grid container spacing={4}>
                    {/* will need to add a map her to give each result thier own grid with card add back  key={card}  */}
                    <Grid item xs={12} sm={6} md={4}>
                        <ResultsCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ResultsCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ResultsCard />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );

}