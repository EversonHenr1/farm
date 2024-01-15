import Fade from "../form/Fade";
import styles from "./css/MenssagerOptions.module.css"


function MenssagerOptions({fechar,msg,ok}){
    
    return(
        <>
        <Fade close={fechar}>
         <div className={styles.containerMsg}>
            <h2>{msg.title}</h2>
            <p>{msg.body}</p>
            <div>
                <button onClick={ok}>Sim</button>
                <button onClick={fechar}>Não</button>
            </div>
            
         </div>
         </Fade>
        </>
    )
}

export default MenssagerOptions;