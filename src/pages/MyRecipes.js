import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CardRecipes from "../components/CardRecipes"
import Section from "../components/Section"
import style from "./css/MyRecipes.module.css"


function MyRecipes(){
    const [listRecipes,setListRecipes]= useState([])

    useEffect(()=>{
        axios.patch("/recipe").then((response)=>{
            console.log(response.data.response)
            setListRecipes(response.data.response)
            
        }).catch(err=>console.log(err))
    },[])


    return(
       <Section color="E6E9F2" flex="flex" backgroundContain="linear2">
           <div className={style.ContainerRecipe}>
           <h2>Minhas Receitas</h2>
            <div className={style.cardNew}>
                <div>
                    <Link to="/newrecipe"/>
                    <span>+</span>
                </div>
            </div>

            {listRecipes.map((item,index) => (
                <CardRecipes key={index} receita={item} />
            ))} 
           </div>
       </Section>
    )
}

export default MyRecipes