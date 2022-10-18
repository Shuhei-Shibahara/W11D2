import { CoffeeBeanContext } from "../context/CoffeeContext";



const SelectedCoffeeBean = () => {
  const {coffeeBean, setCoffeeBean} = CoffeeBeanContext();
  console.log(coffeeBean)
  return (
    <div className="selected-coffee">
      <h2>{coffeeBean}</h2>
    </div>
  )
}

export default SelectedCoffeeBean;