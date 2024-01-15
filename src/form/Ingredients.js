import { useState } from "react"
import SelectType from "../components/SelectType"
import DeleteButton from "../components/DeleteButton"
import Selections from "./Selections"
import styles from "./css/Ingredients.module.css"
import { FaTimes } from "react-icons/fa"
import Input from "./Input"

function Ingredients({num,click,options,value,changeSelect,changeInput,plus,sel,medida}){
  
    return(
        <div className={styles.container_Ingred}>
            <h3>Ingrediente {num}</h3>
            
            <div>
                
                <Selections sel={sel}   opcoes={options} value={value.ingrediente} name={"selectIngredient"+num}  change={changeSelect}  key={"selectIngredient" +num}/>
                <Input type="number" text={medida} value={value.quantidade}  name={"selectQuant" + num} key={"quantIngredient" + num} Change={changeInput}/>
                
            </div>
            <div>
            <span onClick={click} nume={num}>x</span>
            <span onClick={plus} nume={num}>+</span>
            </div>
            
        </div>
    )
}

export default Ingredients