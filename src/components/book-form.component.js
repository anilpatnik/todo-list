import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";

const BookFormComponent = () => {
  const { loading } = useSelector(state => state.books);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { title: "", author: "" },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      author: Yup.string().required("Required")
    }),
    onSubmit: values => {
      const { title, author } = values;
      dispatch({ type: "LOAD_BOOK" });
      setTimeout(() => {
        dispatch({ type: "ADD_BOOK", payload: { title, author, id: uuidv4() } });
        formik.resetForm();
      }, 2000);
    }
  });
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input name="title" type="text" {...formik.getFieldProps("title")} />
      {formik.touched.title && formik.errors.title ? <div>{formik.errors.title}</div> : null}
      <label htmlFor="author">Author</label>
      <input name="author" type="text" {...formik.getFieldProps("author")} />
      {formik.touched.author && formik.errors.author ? <div>{formik.errors.author}</div> : null}
      <input type="submit" value={loading ? "Loading..." : "Submit"} />
    </form>
  );
};

export default BookFormComponent;
