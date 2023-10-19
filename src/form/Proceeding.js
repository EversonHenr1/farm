
import DeleteButton from "../components/DeleteButton"
import TextAreaAutoHeight from "./TextAreaAutoHeight"
import styles from "./css/Proceeding.module.css"
import { useState } from "react"

function Proceeding({num,sendObjectToParent}){

    const [visualizedProceeding,setvisualizedProceeding] = useState(true)
    const [proceeding, setProceeding] = useState({})
    
    if(!visualizedProceeding){
        return null;
    }
    function deleteProceeding(){
        setvisualizedProceeding(false)
    }
    function handleProceeding(e){
        setProceeding({...proceeding,id:num,body:e.target.value})
        sendParent()
    }
    function sendParent(){
        sendObjectToParent(proceeding,num)
    }

    return(
        <div className={styles.containerProcesso}>
            <div className={styles.dif}></div>
            <h3>{num}</h3>
            <TextAreaAutoHeight change={handleProceeding} text={`Digite o processo ${num}:`}/>
            <DeleteButton click={deleteProceeding}/>
        </div>
    )
}

export default Proceeding