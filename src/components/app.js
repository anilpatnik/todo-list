import React from "react";
import NavbarComponent from "./navbar.component";
import BookListComponent from "./book-list.component";
import BookFormComponent from "./book-form.component";

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <BookListComponent></BookListComponent>
      <BookFormComponent></BookFormComponent>
    </div>
  );
}

export default App;
