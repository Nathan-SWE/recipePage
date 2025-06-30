import Header from "./components/Header/Header";
import Preparation from "./components/Preparation/Preparation";
import Recipe from "./components/Recipe/Recipe";

function App() {
  return (
    <>
      <Header />
      <main>
        <Recipe />
        <Preparation />

        <section>
          <h2>Ingredients</h2>
          <p>
            2-3 large eggs Salt, to taste Pepper, to taste 1 tablespoon of
            butter or oil Optional fillings: cheese, diced vegetables, cooked
            meats, herbs
          </p>
        </section>
        <section>
          <h2>Instructions</h2>
          <p>
            Beat the eggs: In a bowl, beat the eggs with a pinch of salt and
            pepper until they are well mixed. You can add a tablespoon of water
            or milk for a fluffier texture. Heat the pan: Place a non-stick
            frying pan over medium heat and add butter or oil. Cook the
            omelette: Once the butter is melted and bubbling, pour in the eggs.
            Tilt the pan to ensure the eggs evenly coat the surface. Add
            fillings (optional): When the eggs begin to set at the edges but are
            still slightly runny in the middle, sprinkle your chosen fillings
            over one half of the omelette. Fold and serve: As the omelette
            continues to cook, carefully lift one edge and fold it over the
            fillings. Let it cook for another minute, then slide it onto a
            plate. Enjoy: Serve hot, with additional salt and pepper if needed.
          </p>
        </section>

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
