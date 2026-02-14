import React, { useState } from "react";
import "./Gallery.css";

const images = [
  {
    src: "https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2_3x4.jpg",
    alt: "An image of a red-eyed tree frog sitting on leaves.",
    title: "Red-eyed Tree Frog",
  },
  {
    src: "https://as1.ftcdn.net/v2/jpg/01/99/77/64/1000_F_199776474_ORr8LaAj6pihYKMD4HqHpQ2nkTZ0IrIX.jpg",
    alt: "An image of a frog that is smiling happily.",
    title: "A smiley frog",
  },
  {
    src: "https://cdn.britannica.com/73/100273-050-221A0593/arrow-poison-frogs-sound-production-colour-warning-signal.jpg",
    alt: "An image of a colourful poison-dart frog.",
    title: "A Poison Dart Frog",
  },
  {
    src: "https://kids.earth.org/wp-content/uploads/2023/07/Untitled-683-%C3%97-1024px-1024-%C3%97-683px-2023-07-26T184215.475-900x600.jpg",
    alt: "An image of three small frogs on a branch.",
    title: "Three cute froglets",
  },
  {
    src: "https://i0.wp.com/www.australiangeographic.com.au/wp-content/uploads/2018/06/Litoria_caerulea_-_Darwin_NT.jpg?fit=1000%2C672&ssl=1",
    alt: "An image of a very large shiny green frog.",
    title: "A chonky green frog",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Breviceps_macrops_454407799.jpg/1200px-Breviceps_macrops_454407799.jpg",
    alt: "An image of a small Rain Frog, covered in sand.",
    title: "A grumpy Rain Frog",
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className="gallery">
        {images.map((img, index) => (
          <div key={index} className="thumbnail-container">
            <img
              src={img.src}
              alt={img.alt}
              className="thumbnail"
              onClick={() => setSelectedImage(img)}
            />
            <p className="caption">{img.title}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="large-image"
          />
          <p className="caption">{selectedImage.title}</p>
        </div>
      )}
    </div>
  );
}

export default Gallery;
