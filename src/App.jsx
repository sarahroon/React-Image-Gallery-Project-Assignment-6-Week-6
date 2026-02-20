import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  const images = [
    {
      original:
        "https://as1.ftcdn.net/v2/jpg/01/99/77/64/1000_F_199776474_ORr8LaAj6pihYKMD4HqHpQ2nkTZ0IrIX.jpg",
      thumbnail:
        "https://images.fineartamerica.com/images-medium-large/smiling-frog-bob-luce.jpg",
    },
    {
      original:
        "https://kids.earth.org/wp-content/uploads/2023/07/Untitled-683-%C3%97-1024px-1024-%C3%97-683px-2023-07-26T184215.475-900x600.jpg",
      thumbnail:
        "https://bolivia-expeditions.com/wp-content/uploads/poison_dart_frog.jpg",
    },
    {
      original:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Breviceps_macrops_454407799.jpg/1200px-Breviceps_macrops_454407799.jpg",
      thumbnail:
        "https://img.freepik.com/premium-photo/three-little-green-tree-frogs-tree-branch_266258-1195.jpg",
    },
    {
      original:
        "https://i0.wp.com/www.australiangeographic.com.au/wp-content/uploads/2018/06/Litoria_caerulea_-_Darwin_NT.jpg?fit=1000%2C672&ssl=1",
      thumbnail:
        "https://i.pinimg.com/736x/cd/80/ff/cd80ffb08135c81f69be05eaef967998.jpg",
    },
    {
      original:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Breviceps_macrops_454407799.jpg/1200px-Breviceps_macrops_454407799.jpg",
      thumbnail:
        "https://files.worldwildlife.org/wwfcmsprod/images/Puffer_frog_WWfall2023/magazine_medium/4oq44fj8dx_Frog_WWfall2023.jpg",
    },
  ];

  return (
    <div>
      <h1>React Image Gallery</h1>
      <ImageGallery items={images} />
    </div>
  );
}

export default App;
