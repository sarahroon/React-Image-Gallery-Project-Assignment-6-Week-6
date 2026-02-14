import { useState, useEffect } from "react";

function ImageItem({ image, isSelected, onClick }) {
  return (
    <img
      src={image.url}
      alt={image.title}
      style={{
        width: "100px",
        height: "100px",
        border: isSelected ? "3px solid red" : "1px solid green",
        cursor: "pointer",
      }}
      onClick={() => onClick(image)}
    />
  );
}

function SelectedImageDisplay({ image }) {
  if (!image) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Selected Image:</h3>
      <img
        src={image.url}
        alt={image.title}
        style={{ width: "300px", height: "300px", objectFit: "cover" }}
      />
      <p>{image.title}</p>
    </div>
  );
}

function Gallery({ initialImages }) {
  const [images, setImages] = useState(initialImages || []);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(
          "https://week-6-api.vercel.app/api/images",
        );
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    }

    fetchImages();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <h2>Gallery</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {images.map((img) => (
          <ImageItem
            key={img.id}
            image={img}
            isSelected={selectedImage?.id === img.id}
            onClick={handleImageClick}
          />
        ))}
      </div>

      <SelectedImageDisplay image={selectedImage} />
    </div>
  );
}

export default function App() {
  const initialImages = [
    {
      id: 1,
      url: "https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2_3x4.jpg",
      title: "Red-eyed Tree Frog",
    },
    {
      id: 2,
      url: "https://as1.ftcdn.net/v2/jpg/01/99/77/64/1000_F_199776474_ORr8LaAj6pihYKMD4HqHpQ2nkTZ0IrIX.jpg",
      title: "A smiley frog",
    },
    {
      id: 3,
      url: "https://cdn.britannica.com/73/100273-050-221A0593/arrow-poison-frogs-sound-production-colour-warning-signal.jpg",
      title: "A Poison Dart Frog",
    },
    {
      id: 4,
      url: "https://kids.earth.org/wp-content/uploads/2023/07/Untitled-683-%C3%97-1024px-1024-%C3%97-683px-2023-07-26T184215.475-900x600.jpg",
      title: "Three cute froglets",
    },
    {
      id: 5,
      url: "https://i0.wp.com/www.australiangeographic.com.au/wp-content/uploads/2018/06/Litoria_caerulea_-_Darwin_NT.jpg?fit=1000%2C672&ssl=1",
      title: "A chonky green frog",
    },
    {
      id: 6,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Breviceps_macrops_454407799.jpg/1200px-Breviceps_macrops_454407799.jpg",
      title: "A grumpy Rain Frog",
    },
  ];

  return <Gallery initialImages={initialImages} />;
}
