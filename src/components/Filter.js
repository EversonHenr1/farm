
import { useRef, useState } from "react";
import { FaArrowCircleDown, FaArrowDown, FaCartArrowDown, FaLongArrowAltDown, FaSortAlphaUp, FaSortDown, FaSortUp } from "react-icons/fa";
import styles from "./css/FIlter.module.css"
function FIlter({text}){
    const [drop,setDrop] =useState(null); 

    const toogleDrop = ()=>{
        if(drop === null)
        setDrop("drop");
        else if(drop === "drop")
        setDrop(null);
    }

    return(
       <div className={`${styles.filterRelative} ${styles[drop]}`}>
           
            <span onClick={toogleDrop} ><FaSortUp/> {text}</span>
            <ul className={styles.dropdown}>
                <li>top</li>
                <li>donw</li>
            </ul>
       </div> 
    )
}
export default FIlter;