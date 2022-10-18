import { useCoffeeBeanContext } from "../context/CoffeeContext";

const SelectedCoffeeBean = () => {
  const {coffeeBean, setCoffeeBean} = useCoffeeBeanContext();
  console.log(coffeeBean)
  return (
    <div className="selected-coffee">
      <h2>{coffeeBean.name}</h2>
    </div>
  )
}

export default SelectedCoffeeBean;