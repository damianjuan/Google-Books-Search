import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function SavedCard({ book, deleteBook }) {
    const classes = useStyles();
    // book data
    const title = book.title;
    const authors = book.authors
    const summary = book.description;
    const thumbnail = book.image;
    const linkURL = book.link;
    const bookID = book._id;






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
                <Button size="small" color="primary" href={linkURL} target="_blank" >
                    view
        </Button>
                <Button size="small" color="primary" onClick={deleteBook()} >
                    delete
        </Button>
            </CardActions>
        </Card>
    );
}