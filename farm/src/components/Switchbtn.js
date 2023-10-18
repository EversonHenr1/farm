import { useState } from 'react';
import styles from "./css/Switchbtn.module.css"

function Switchbtn({ligar}) {
    
  const [ligado, setLigado] = useState(false);

  const toggleSwitch = () => {
    setLigado(!ligado);
    ligar()
  };

  return (
    <div className={styles.containerSwitch}>
      <label className={styles.switch}>
        <input  type="checkbox" checked={ligado} onChange={toggleSwitch} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}

export default Switchbtn;