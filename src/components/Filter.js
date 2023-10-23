
import { useRef } from "react";
import { FaArrowCircleDown, FaArrowDown, FaCartArrowDown, FaLongArrowAltDown, FaSortAlphaUp, FaSortDown, FaSortUp } from "react-icons/fa";
import styles from "./css/FIlter.module.css"
function FIlter({text}){
    const filtro = useRef(null);
    const list = useRef(null);
    function drop(e){
        list.current.classList.toggle("drop")
    }

    return(
       <div className={styles.filterRelative}>
           
            <span className={styles.filter} onClick={} ref={filtro} ><FaSortUp/> {text}</span>
            <ul className={styles.dropdown} ref={list}>
                <li>top</li>
                <li>donw</li>
            </ul>
       </div> 
    )
}
export default FIlter;