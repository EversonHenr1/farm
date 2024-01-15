
import styles from "./css/Infos.module.css"

function Infos({children}){
    return(
        <span className={styles.infoContainer}>
        {children}
        </span>
    )
}

export default Infos;