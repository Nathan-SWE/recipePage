import Header from "./components/Header/Header";
import Ingredients from "./components/Ingredients/Ingredients";
import Instructions from "./components/Instructions/Instructions";
import Nutrition from "./components/Nutrition/Nutrition";
import Preparation from "./components/Preparation/Preparation";
import Recipe from "./components/Recipe/Recipe";

function App() {
  return (
    <>
      <Header />
      <main>
        <Recipe />
        <Preparation />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </main>
      <footer>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Nathan</a>.
      </footer>
    </>
  );
}

export default App;
