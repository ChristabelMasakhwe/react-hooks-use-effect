import React, { useEffect } from "react";
import DogPics from "./DogPics.js"

function App() {
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  console.log("Component rendering");

  return <div>
    <DogPics />
  <button>Click Me</button>;
  </div>
}

export default App;
