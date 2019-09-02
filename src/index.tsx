import * as React from "react";
import { render } from "react-dom";

import Game from "./Game";

import "/node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Basket</h1>
        <Game />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
