import Button from "./Button";
import styles from "./css/CardImg.module.css"
import {FaEye} from "react-icons/fa"

function CardImg({img,alt,image}){
    const backgroundI = image ? {backgroundImage: `url(${image})`} : {};

    return (
    <div className={styles.img} style={{...backgroundI}}  >
            <Button>Visualizar<FaEye/></Button>
    </div>)
}

export default CardImg