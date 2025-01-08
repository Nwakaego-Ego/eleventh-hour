import ReactDOM from "react-dom";

import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <>
      <div className="mainContainer">
        <p>Create</p>
        <FontAwesomeIcon icon="faCoffee" />
      </div>
    </>
  );
}

export default App;
