import { useState, useEffect } from "react";

function ImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchImages() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://week-6-api.vercel.app/api/images",
          {
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();
        setImages(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchImages();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) return <p>Loading images...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {images.map((img) => (
        <img key={img.id} src={img.url} alt={img.title} />
      ))}
    </div>
  );
}

export default ImageGallery;
