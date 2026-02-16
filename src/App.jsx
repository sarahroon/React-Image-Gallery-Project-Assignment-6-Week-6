import React from "react";
import ThumbnailGallery from "./components/ThumbnailGallery";
import "./App.css";
import.meta.env.VITE_API_KEY;

function App() {
  return (
    <div>
      <h1>Frog Image Gallery</h1>
      <ThumbnailGallery />
    </div>
  );
}

export default App;
