import { CoffeeBean } from "../context/CoffeeContext";

const SelectedCoffeeBean = () => {
  return (
    <div className="selected-coffee">
      <h2>{CoffeeBean}</h2>
    </div>
  )
}

export default SelectedCoffeeBean;