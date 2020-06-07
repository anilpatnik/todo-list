import React, { Fragment } from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@material-ui/core";
import { HearderComponent } from "./header.component";
import { ItemListComponent } from "./item-list.component";
import { ItemFormComponent } from "./item-form.component";

export default function App() {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Todo List</Typography>
        </Toolbar>
      </AppBar>
      <Box mt={5}>
        <Container maxWidth="md">
          <HearderComponent />
          <ItemListComponent />
          <ItemFormComponent />
        </Container>
      </Box>
    </Fragment>
  );
}
