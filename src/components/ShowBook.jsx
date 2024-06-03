import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { getBookByIDAction } from "../redux/bookSlice";

export function ShowBook() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [book, setBook] = useState({});
  useEffect(() => {
    dispatch(getBookByIDAction(id)).then((data) => {
      setBook(data.payload);
    });
  });
  return (
    <>
      <div className="d-flex justify-content-center my-3">
        <Card style={{ width: "18rem" }} className="text-center">
          <Card.Body>
            <Card.Title>Title: {book.title}</Card.Title>
            <Card.Text>Description: {book.desc}</Card.Text>
            <Card.Text>book id: {book.id}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
