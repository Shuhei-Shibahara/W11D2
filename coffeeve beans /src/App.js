import SelectedCoffeeBean from "./components/SelectedCoffeeBean.js";
import SetCoffeeBean from "./components/SetCoffeeBean.js";
import coffeeBeans from "./mockData/coffeeBeans.json";

function App() {

  return (
    <>
      <h1>Welcome to Coffee App</h1>
      < SelectedCoffeeBean />
      < SetCoffeeBean value={coffeeBeans}/>
    </>
  );
}

export default App;