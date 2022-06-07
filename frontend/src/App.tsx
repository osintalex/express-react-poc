import * as React from "react";
import "./App.css";

function App(): React.ReactElement {
  fetch("http://localhost:8000/example/test")
    .then((response: Response): Promise<{ hello: string }> => response.json())
    .then((data: { hello: string }): void => console.log(data.hello))
    .catch((error: string): void => {
      console.log(error);
    });
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
