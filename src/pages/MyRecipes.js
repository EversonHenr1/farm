import { Link } from "react-router-dom"
import Button from "../components/Button"
import CardImg from "../components/CardImg"
import CardRecipes from "../components/CardRecipes"
import Container from "../components/Container"
import Section from "../components/Section"
import style from "./css/MyRecipes.module.css"
import responsive from "./mobile/MyRecipesR.module.css"
import NewRecipe from "./NewRecipe"

function MyRecipes({recipes}){
    return(
       <Section color="E6E9F2" flex="flex">
           <div className={`${style.ContainerRecipe} ${responsive.ContainerRecipeR}`}>
           <h2>Minhas Receitas</h2>
            <div className={style.cardNew}>
                <div>
                    <Link to="/newrecipe"/>
                    <span>+</span>
                </div>
            </div>
               <div className={style.Fade}></div>

               {recipes.map((receita, index) => (
                <CardRecipes key={index} receita={receita} />
                ))}
           </div>
       </Section>
    )
}

export default MyRecipes