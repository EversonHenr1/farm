import CardRecipes from "./CardRecipes";
import styles from "./css/ListRecipes.module.css"

function ListRecipes({recipes}){
    return(
        <div className={styles.containerRecipes}>
             {recipes.map((recipe, index) => (
                <CardRecipes/>
             ))}
        </div>
    )

}

export default ListRecipes;