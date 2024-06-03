import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { useEffect, useState, Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  bookActions,
  deleteBookAction,
  getAllBooksAction,
} from "../redux/bookSlice";

export function Books() {
  let { books, error, isLoading } = useSelector((state) => state.bookSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooksAction());
  }, []);
  const { deleteB } = bookActions;
  const deleteHandler = async (ID) => {
    dispatch(deleteBookAction(ID));
    dispatch(deleteB(ID));
  };
  return (
    <>
      <Container className="my-3 ">
        <Link to="/addBook" className="btn btn-primary  my-4 ">
          Add Book
        </Link>
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : error ? (
          <h1 className="alert alert-danger text-center">can't fetch Data</h1>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books &&
                books.map((book) => {
                  return (
                    <tr key={book.id}>
                      <td>{book.id}</td>
                      <td>{book.title}</td>
                      <td>{book.desc}</td>
                      <td>
                        <Link
                          to={`/editBook/${book.id}`}
                          className="btn btn-warning"
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-danger mx-2"
                          onClick={() => deleteHandler(book.id)}
                        >
                          Delete
                        </button>
                        <Link to={`/show/${book.id}`} className="btn btn-info">
                          Show
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
}
