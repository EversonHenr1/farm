import { FaTrash } from "react-icons/fa"
import styles from "./css/DeleteButton.module.css"

function DeleteButton({click}){
    return(
        <button className={styles.ex} onClick={click}><FaTrash/></button>
    )
}

export default DeleteButton