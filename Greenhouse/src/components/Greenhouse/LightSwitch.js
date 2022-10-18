import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {

  const {themeName, setThemeName} = useTheme();
  const clickHandler = (e) => {
    e.preventDefault();
    if (e.target.className === 'off'){
      setThemeName('night')
    } else {
      setThemeName('day')
    }
  }

  return (
    <div className="light-switch day">
      <div className="on" onClick={clickHandler}>DAY</div>
      <div className="off" onClick={clickHandler}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;