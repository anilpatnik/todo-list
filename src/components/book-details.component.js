import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

const BookDetailsComponent = ({ book }) => {
  const { bookId, deleting } = useSelector(state => state.books);
  const dispatch = useDispatch();
  return (
    <li
      onClick={() => {
        dispatch({ type: "LOAD_BOOK", payload: book.id });
        setTimeout(() => dispatch({ type: "REMOVE_BOOK", payload: book.id }), 2000);
      }}
    >
      <Fragment>
        <div className="id">{book.id}</div>
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
        <div>{deleting && book.id === bookId ? <p>Deleting...</p> : ""}</div>
      </Fragment>
    </li>
  );
};

export default BookDetailsComponent;
