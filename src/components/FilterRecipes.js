import styles from "./css/FilterRecipes.module.css"
import FIlter from "./Filter";

function FilterRecipes(){
    return(
        <>
            <div className={`${styles.barFilter}`}></div>
            <div className={`${styles.containerFilter}`}>
                <FIlter text="filtro"/>
            </div>
        </>
        
    )
}

export default FilterRecipes;