import React, { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import BookDetailsComponent from "./book-details.component";

const BookListComponent = () => {
  const { books } = useSelector(state => state.books, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "LOAD_BOOK" });
    const localData = sessionStorage.getItem("books");
    setTimeout(
      () =>
        dispatch({
          type: "GET_BOOKS",
          payload: localData ? JSON.parse(localData) : []
        }),
      2000
    );
  }, [dispatch]);
  useEffect(() => {
    sessionStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => {
          return <BookDetailsComponent book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read. Hello free name :)</div>
  );
};

export default BookListComponent;
