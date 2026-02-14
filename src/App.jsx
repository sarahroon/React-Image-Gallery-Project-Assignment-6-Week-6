import React, { useState } from "react";
import ThumbnailGallery from "./components/ThumbnailGallery";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Frog Image Gallery</h1>
      <ThumbnailGallery />

      <div className="counter">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div>
    </div>
  );
}

export default App;
