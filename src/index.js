import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import Example from "./App";
import DropdownExampleSelection from "./dropdown";

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>{children}</Container>
);

ReactDOM.render(
  <App>
    <Example />
    {/* <DropdownExampleSelection /> */}
  </App>,
  document.getElementById("root")
);
