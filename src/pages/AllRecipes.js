import FilterRecipes from "../components/FilterRecipes";
import ListRecipes from "../components/ListRecipes";
import Section from "../components/Section";
import backgroundwave from "../img/background-wave.png";

function AllRecipes(){
    var recipes = [1,2,3,4,5]
    return(
        <Section flex="colum" color="F9F9F9" padding="10em 0" image={backgroundwave} backgroundContain="backgroundContain" gaps="3em 0">
            <FilterRecipes />
            <ListRecipes recipes={recipes}/>
            
            
        </Section>
    )

}

export default AllRecipes;