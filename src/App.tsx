import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          btnType={ButtonType.Primary}
          onClick={(e) => {
            alert(123);
          }}
        >
          12234
        </Button>

        <Button btnType={ButtonType.Primary}>12234</Button>
        <Button btnType={ButtonType.Link} href="1">
          12234
        </Button>
        <Button btnType={ButtonType.Primary} disabled>
          12234
        </Button>
        <Button btnType={ButtonType.Danger}>12234</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <code>const a = 'a'</code>
      </header>
    </div>
  );
}

export default App;
