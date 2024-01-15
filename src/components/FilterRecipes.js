import styles from "./css/FilterRecipes.module.css"
import FIlter from "./Filter";

function FilterRecipes(){
    return(
        <>
            <div className={`${styles.barFilter}`}></div>
            <div className={`${styles.containerFilter}`}>
                <FIlter text="Ordem"/>
                <FIlter text="Relevancia"/>
                <FIlter text="Visualização"/>
            </div>
        </>
        
    )
}

export default FilterRecipes;