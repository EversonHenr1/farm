import FilterRecipes from "../components/FilterRecipes";
import ListRecipes from "../components/ListRecipes";
import Section from "../components/Section";
import backgroundwave from "../img/background-wave.png";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function AllRecipes(){
    const [recipe,setRecipe] = useState([{}]);
    useEffect(()=>{
        axios.get("/recipe").then((response)=>{
            console.log(response.data.response)
            setRecipe(response.data.response)
        }).catch(err=>console.log(err))
    },[])
    

    return(
        <Section flex="colum" color="F9F9F9" padding="10em 0" image={backgroundwave} backgroundContain="backgroundContain" gaps="3em 0">
            <FilterRecipes />
             <ListRecipes recipes={recipe} /> 
            
            
        </Section>
    )

}

export default AllRecipes;