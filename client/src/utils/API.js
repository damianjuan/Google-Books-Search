import axios from 'axios';



export default {
    // Gets all books
    getBooks: function (searchTerm) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm);
    },
    saveBook: function (bookData) {
        return axios.post("/api/books/", bookData);
    }


};