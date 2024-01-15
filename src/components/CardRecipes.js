import CardImg from "./CardImg"
import iconHat from "../img/cardRecipes/iconHat.png"
import styles from "./css/CardRecipes.module.css"
import Lines from "../components/Lines"
import { FaCookie } from "react-icons/fa"
import { useState } from "react"


function CardRecipes({receita}){

    const [showDesc,setShowDesc] = useState(false);
    const [desc] = useState(receita.descricao)
    const [titulo] = useState(receita.titulo)
    
  
    const formattedDesc = typeof desc === 'string' && desc.length > 120
    ? desc.substring(0, 120) + '...'
    : desc;  


   let formattedTitulo = typeof receita.titulo === 'string' && receita.titulo.length > 16 ? receita.titulo.substring(0, 16) + '...' : receita.titulo;  

   const redirect = ()=>{
    window.location.href = "http://localhost:3000/recipe/"+receita.id_receitas
   }
  
    return(
        <div className={styles.containerRecipes}>
            <img src={iconHat} alt="icone_bigode"/>
            <CardImg image={receita.img_url} idRecipe={receita.id_receitas}/>
            <div className={styles.containerLines}>

                <Lines><h5 className={styles.tittle} onClick={redirect}>{formattedTitulo}</h5></Lines>
                <span>{receita.nome} <FaCookie/> </span> 
                <div className={styles.containerDesc}>
                    <p>{formattedDesc} </p>
                </div>
            </div> 
            
        </div>
    )
}

export default CardRecipes