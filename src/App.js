import React from "react";
import "./App.css";
import Photo from './components/Photo';
function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Photo limit={1} />
    </div>
  );
}

export default App;
