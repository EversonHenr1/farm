import CardImg from "./CardImg"
import iconHat from "../img/cardRecipes/iconHat.png"
import styles from "./css/CardRecipes.module.css"
import Lines from "../components/Lines"
import { FaCookie } from "react-icons/fa"
import { useState } from "react"


function CardRecipes({tittle,autor,desc,imagem}){

    const [showDesc,setShowDesc] = useState(false);
    const on = ()=>{
        setShowDesc(true)
    }
    const off = ()=>{
        setTimeout(()=>{
            setShowDesc(false)
        },1000)
    }
  
    const formattedDesc = typeof desc === 'string' && desc.length > 120
    ? desc.substring(0, 120) + '...'
    : desc;


    return(
        <div className={styles.containerRecipes}>
            <img src={iconHat} alt="testando"/>
            <CardImg alt="tentando img" image={imagem}/>
            <div className={styles.containerLines} >
                <Lines><h5 className={styles.tittle} onMouseEnter={on} onMouseOut={off} >{tittle}</h5></Lines>
                <span>{autor} <FaCookie/> </span> 
                {showDesc &&
                <div className={styles.containerDesc}>
                    <p>{formattedDesc} </p>
                </div>}
            </div>
            
        </div>
    )
}

export default CardRecipes