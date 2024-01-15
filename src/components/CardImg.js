import Button from "./Button";
import styles from "./css/CardImg.module.css"
import {FaEye} from "react-icons/fa"

function CardImg({image,idRecipe}){
    const backgroundI = image ? {backgroundImage: `url(${image})`} : {};
    return (
    <div className={styles.img} style={{...backgroundI}}  >
            <Button link={`/recipe/${idRecipe}`}>Visualizar<FaEye/></Button>
    </div>)
}

export default CardImg