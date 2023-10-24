import styles from "./css/FilterRecipes.module.css"
import FIlter from "./Filter";

function FilterRecipes(){
    return(
        <>
            <div className={`${styles.barFilter}`}></div>
            <div className={`${styles.containerFilter}`}>
                <FIlter text="filtro"/>
                <FIlter text="filtro2"/>
                <FIlter text="filtro3"/>
            </div>
        </>
        
    )
}

export default FilterRecipes;