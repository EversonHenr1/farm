import { Link } from "react-router-dom"
import styles from "./css/Button.module.css"

function Button({link,name,click,styleBtn,children}){
    return(
        link === undefined ?(
            <button className={`${styles.btn} ${styles[styleBtn]}`} name={name} id={name} onClick={click}>{children}</button>
        ):(
            <Link to={link} className={styles.aLink}><button className={`${styles.btn} ${styles[styleBtn]}`} name={name} id={name} onClick={click}>{children}</button></Link>
        )   
    )
}

export default Button