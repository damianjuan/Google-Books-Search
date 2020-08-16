import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Card, Typography, List, ListItem, Button, Input, InputLabel, FormControl } from '@material-ui/core';
import SearchResults from '../pages/SearchResults';
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
        },
        input: {
            margin: theme.spacing(1),
        },

    },
}));

export default function SearchForm() {
    const classes = useStyles();

    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState("")

    // Load all books and store them with setBooks
    // useEffect(() => {
    //     loadBooks()
    // }, [])

    // Loads all books and sets them to books
    // function loadBooks() {
    //     API.getBooks()
    //         .then(res =>
    //             setBooks(res.data)
    //         )
    //         .catch(err => console.log(err));
    // };

    // Deletes a book from the database with a given id, then reloads books from the db
    // function deleteBook(id) {
    //     API.deleteBook(id)
    //         .then(res => loadBooks())
    //         .catch(err => console.log(err));
    // }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { value } = event.target;
        setFormObject({ ...formObject, value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.value) {
            API.getBooks(formObject.value).then(res => setBooks(res.data.items))
                .catch(err => console.log(err));
        }
    }



    return (
        <div className={classes.root}>
            <Paper>
                <Card className={classes.root}>
                    <form>
                        <List>
                            <ListItem style={{ justifyContent: 'left' }} >
                                <Typography variant="h6" className={classes.title}>Books Search</Typography>
                            </ListItem>
                            <ListItem>
                                <FormControl fullWidth className={classes.margin} variant="filled">
                                    <InputLabel>Search</InputLabel>
                                    <Input onChange={handleInputChange} />
                                </FormControl>
                            </ListItem>
                            <ListItem >
                                <Button className={classes.margin} variant="contained" color="primary" onClick={handleFormSubmit} >Search</Button>
                            </ListItem>
                        </List>
                    </form>
                </Card>
            </Paper>
            {books.length > 0 && <SearchResults />}

        </div>
    );
}