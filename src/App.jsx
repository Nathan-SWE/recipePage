import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Ingredients from "./components/Ingredients/Ingredients";
import Instructions from "./components/Instructions/Instructions";
import Nutrition from "./components/Nutrition/Nutrition";
import Preparation from "./components/Preparation/Preparation";
import Recipe from "./components/Recipe/Recipe";
import "./css/app.css";

function App() {
  return (
    <main>
      <Header />
      <Recipe />
      <Preparation />
      <Ingredients />
      <Instructions />
      <Nutrition />
      <Footer />
    </main>
  );
}

export default App;
