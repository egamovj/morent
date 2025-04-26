import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Popular from "./components/Popular/Popular";
import Recomendation from "./components/Recomendation/Recomendation";
import CarDetail from "./pages/CarDetail"; //

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Popular />
              <Recomendation />
            </>
          }
        />
        <Route path="/car/:id" element={<CarDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
