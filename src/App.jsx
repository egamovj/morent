import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Popular from "./components/Popular/Popular";
import Recomendation from "./components/Recomendation/Recomendation";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Popular />
      <Recomendation />
    </>
  );
}

export default App;
