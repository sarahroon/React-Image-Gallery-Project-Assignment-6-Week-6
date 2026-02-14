function App() {
  console.log("API URL:", import.meta.env.VITE_API_URL);

  return (
    <div>
      <h1>Feature flag: {import.meta.env.VITE_FEATURE_FLAG}</h1>
    </div>
  );
}

export default App;
