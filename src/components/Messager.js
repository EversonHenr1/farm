import Fade from "../form/Fade";
import styles from "./css/Messager.module.css"

function Messager({fechar,msg}){
    return(
      <>
        <Fade close={fechar}>
         <div className={styles.containerMsg}>
            <h2>{msg.title}</h2>
            <p>{msg.body}</p>
            <button onClick={fechar}>ok</button>
         </div>
        </Fade>
      </>
    )
}

export default Messager;