import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import "./App.css";
import RenderComponentToString from "./components/RenderComponentToString";
import examples from "./data/examples.json";
import TableExamples from "./examples/TableExamples";

function App() {
  const html = ReactDOMServer.renderToStaticMarkup(<RenderComponentToString />);
  return (
    <div className="App">
      <h1 className="title">Belajar React</h1>
      <div
        style={{
          display: "flex",
          margin: "auto",
          paddingTop: "1rem",
          width: 1000,
        }}
      >
        <table width={"60%"}>
          <thead style={{ textAlign: "left" }}>
            <tr>
              <th>Judul</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {examples.map((it) => (
              <tr>
                <td>{it.title}</td>
                <td>
                  <button>Show</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ width: "40%" }}>
          <h2>Preview:</h2>
          <RenderComponentToString />
          <h2>Code:</h2>
          <pre>{html}</pre>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
