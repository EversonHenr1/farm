
import styles from "./css/Submit.module.css"


function Submit({name,text,submit,color}){

    return (<input type="submit" className={`${styles.submit} ${styles[color]}`}  name={name} id={name} value={text} onSubmit={submit}></input>)
    
}

export default Submit;