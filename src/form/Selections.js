
import styles from "./css/Selections.module.css"

function Selections({opcoes,change,name,value,sel}){
    
   
    return(
        <select name={name} id={name}   value={value} className={styles.selection} onChange={change}>
            <option  value="">selecione..</option>
            {
                opcoes ? opcoes.map((element)=>(
                    <option id={element.id} medida={element.medida} value={ sel? element.body + element.id : element.body} key={element.id}>{element.body}</option>
                )) : 
                (<option>Sem opções</option>)
            }
        </select>
    )
}
export default Selections