import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { addBook, getBookByID, updateBook } from "../API/BooksAPI";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBookAction, updateBookAction } from "../redux/bookSlice";

export function BookForm() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: "",
    desc: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const res = await getBookByID(id);
          setBook(res.data);
        } catch (error) {
          console.log("error fteching", error);
        }
      })();
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        dispatch(updateBookAction({ book, id })).then(() => {
          navigate("/books");
        });
      } else {
        dispatch(addBookAction(book)).then(() => {
          navigate("/books");
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container my-4">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Book Title"
              name="title"
              value={book.title}
              onChange={changeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="desc">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Book Description"
              name="desc"
              value={book.desc}
              onChange={changeHandler}
            />
          </Form.Group>
          {id ? (
            <button className="btn btn-outline-success ">update Book</button>
          ) : (
            <button className="btn btn-outline-primary ">Add Book</button>
          )}
        </Form>
      </div>
    </>
  );
}
