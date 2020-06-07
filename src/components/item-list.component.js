import React, { useEffect, Fragment } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Box, Paper, CircularProgress, Backdrop } from "@material-ui/core";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import { ItemDetailsComponent } from "./item-details.component";

export const ItemListComponent = () => {
  const { items, loading } = useSelector(state => state.items, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "LOAD_ITEM" });
    const localData = sessionStorage.getItem("items");
    setTimeout(
      () =>
        dispatch({
          type: "GET_ITEMS",
          payload: localData ? JSON.parse(localData) : []
        }),
      2000
    );
  }, [dispatch]);

  useEffect(() => {
    sessionStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <Fragment>
      {items.length > 0 && (
        <Box mb={5}>
          <TableContainer component={Paper}>
            <div style={{ overflow: "auto" }}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
              </Table>
              <div style={{ overflow: "auto", height: "400px" }}>
                <Table style={{ tableLayout: "fixed" }}>
                  <TableBody>
                    {items.map(item => {
                      return <ItemDetailsComponent item={item} key={item.id} />;
                    })}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TableContainer>
        </Box>
      )}
      <Backdrop open={loading} style={{ zIndex: 100 }}>
        <CircularProgress />
      </Backdrop>
    </Fragment>
  );
};
