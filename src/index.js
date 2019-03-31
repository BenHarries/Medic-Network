import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import Example from "./App";
import DropdownExampleSelection from "./dropdown";

var bg = require("/Users/ben/code/MedHack/doc-network/src/images/Split.png");

const App = ({ children }) => (
  <div
    className="background-image"
    style={{ backgroundImage: "url(" + bg + ")" }}
  >
    <div class="back">
      <Container style={{ margin: 20 }}>{children}</Container>
    </div>
  </div>
);

// ReactDOM.render(document.getElementById("root"));
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <div
    style={{
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)"
    }}
  >
    <App>
      <Example />
    </App>
  </div>,
  document.getElementById("root")
);
