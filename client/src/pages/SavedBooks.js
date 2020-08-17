import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import SavedCard from '../components/SavedCard';
import API from '../utils/API';

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

export default function SavedBooks() {
    const classes = useStyles();
    // Setting our component's initial state
    const [books, setBooks] = useState([])

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getSavedBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err))

    }

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook() {

        //const bookID = event.target
        console.log("delete clicked!");

        // API.deleteBook()
        //     .then(res => loadBooks())
        //     .catch(err => console.log(err));
    }

    return (
        <div className={classes.root}>
            <Paper>
                <Typography variant="h6" className={classes.title}>Saved Books</Typography>
                <Grid container spacing={4}>

                    {books.length >= 1 ?
                        books.map((res, i) =>
                            <Grid item xs={12} sm={6} md={4}>
                                <SavedCard book={res} deleteBook={deleteBook} />
                            </Grid>
                        )
                        :

                        <Grid item xs={12} sm={6} md={4}>
                            No Books Saved
                    </Grid>

                    }

                </Grid>
            </Paper>
        </div>
    );

}