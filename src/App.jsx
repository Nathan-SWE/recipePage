import Header from "./components/Header/Header";
import Ingredients from "./components/Ingredients/Ingredients";
import Instructions from "./components/Instructions/Instructions";
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

        <section>
          <h2>Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings. Calories 277kcal Carbs 0g Protein 20g Fat 22g
          </p>
        </section>
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
