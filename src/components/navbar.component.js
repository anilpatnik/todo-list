import React from "react";
import { useSelector } from "react-redux";

const NavbarComponent = () => {
  const { books } = useSelector(state => state.books);
  return (
    <div className="navbar">
      <h1>Ninja Reading List</h1>
      <p>Currently you have {books.length} books to get through...</p>
    </div>
  );
};

export default NavbarComponent;
