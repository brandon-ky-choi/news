import { useState } from "react";
import { useGetDataQuery } from "./services/appApi";

import List from "./components/List";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container maxWidth="md">
      <List />
    </Container>
  );
}

export default App;
