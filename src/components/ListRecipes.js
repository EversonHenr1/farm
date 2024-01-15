import CardRecipes from "./CardRecipes";
import styles from "./css/ListRecipes.module.css"

function ListRecipes({recipes}){
    return(
        <div className={styles.containerRecipes}>
             {recipes.map((item, index) => (
                <CardRecipes receita={item} key={index}/>
             ))}
        </div>
    )

}

export default ListRecipes;