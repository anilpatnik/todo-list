import React from "react";
import { useDispatch } from "react-redux";
import { IconButton, TableRow, TableCell } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export const ItemDetailsComponent = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <TableRow key={item.id}>
      <TableCell>{item.id}</TableCell>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.desc}</TableCell>
      <TableCell align="right">
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            dispatch({ type: "LOAD_ITEM", payload: item.id });
            setTimeout(() => dispatch({ type: "REMOVE_ITEM", payload: item.id }), 2000);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
