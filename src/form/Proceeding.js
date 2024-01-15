import TextAreaAutoHeight from "./TextAreaAutoHeight"
import styles from "./css/Proceeding.module.css"


function Proceeding({num,remove,change,value,add}){

    return(
        <div className={styles.containerProcesso}>
            <h3>Procedimento {num}</h3>          

            <TextAreaAutoHeight change={change} value={value.body} name={"inpProcedimento" + num}  text="Digite um procedimento" /> 
            <span onClick={remove}>x</span>
            <span onClick={add}>+</span>
        </div>
    )
}

export default Proceeding