import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import API from '../utils/API';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function ResultsCard(book) {
    const classes = useStyles();
    // book data
    const title = book.book.volumeInfo.title;
    const authors = (book.book.volumeInfo.authors).join(', ');
    const summary = book.book.volumeInfo.description;
    const thumbnail = book.book.volumeInfo.imageLinks.thumbnail;
    const linkURL = book.book.volumeInfo.canonicalVolumeLink;

    // When the form is submitted, use the API.saveBook method to save the book data
    function handleBookSave(event) {
        event.preventDefault();

        API.saveBook({
            title: title,
            authors: authors,
            description: summary,
            image: thumbnail,
            link: linkURL
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={title}
                    height="auto"
                    image={thumbnail}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body" gutterBottom component="h4">
                        Written by {authors}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {summary}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href={linkURL} target="_blank">
                    view
        </Button>
                <Button size="small" color="primary" onClick={handleBookSave}>
                    save
        </Button>
            </CardActions>
        </Card>
    );
}