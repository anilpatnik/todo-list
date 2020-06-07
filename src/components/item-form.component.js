import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { Paper, Grid, TextField, Button } from "@material-ui/core";

export const ItemFormComponent = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { name: "", desc: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      desc: Yup.string().required("Required")
    }),
    onSubmit: values => {
      const { name, desc } = values;
      dispatch({ type: "LOAD_ITEM" });
      setTimeout(() => {
        dispatch({ type: "ADD_ITEM", payload: { name, desc, id: uuidv4() } });
        formik.resetForm();
      }, 2000);
    }
  });

  const { name: f1_tou, desc: f2_tou } = formik.touched;
  const { name: f1_err, desc: f2_err } = formik.errors;
  return (
    <Paper className="paper">
      <form className="form" onSubmit={formik.handleSubmit}>
        <Grid container direction="column" spacing={5}>
          <Grid item xs={6}>
            <TextField
              name="name"
              label="Name"
              type="text"
              fullWidth
              helperText={f1_tou && f1_err ? f1_err : ""}
              error={f1_tou && f1_err ? true : false}
              {...formik.getFieldProps("name")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="desc"
              label="Description"
              type="text"
              fullWidth
              helperText={f2_tou && f2_err ? f2_err : ""}
              error={f2_tou && f2_err ? true : false}
              {...formik.getFieldProps("desc")}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};
