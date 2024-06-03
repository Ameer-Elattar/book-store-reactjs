import axios from "axios";

const BaseURL = "http://localhost:3005/books";

const getAllBooks = () => axios.get(BaseURL);
const getBookByID = (ID) => axios.get(`${BaseURL}/${ID}`);
const addBook = (book) => axios.post(BaseURL, book);
const updateBook = (book, ID) => axios.put(`${BaseURL}/${ID}`, book);
const deleteBook = (ID) => axios.delete(`${BaseURL}/${ID}`);

export { getAllBooks, getBookByID, addBook, updateBook, deleteBook };
