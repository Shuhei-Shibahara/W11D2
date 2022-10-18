import { useCoffeeBeanContext } from "../context/CoffeeContext";

const SetCoffeeBean = ({ coffeeBeans }) => {

  const {coffeeBean, setCoffeeBeanId} = useCoffeeBeanContext();
  const changeHandler = (e) =>{
    e.preventDefault();
    setCoffeeBeanId(coffeeBean.id)
  }
  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        value={coffeeBean.id}
        name="coffee-bean"
        onChange={changeHandler}
      >
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={setCoffeeBeanId(bean.id)}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;