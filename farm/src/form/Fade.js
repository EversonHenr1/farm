import styles from "./css/Fade.module.css"

function Fade({children,close}){
    return(
        <div className={styles.fade}>
            
            {children}
            <span onClick={close} className={styles.close}>X</span>
        </div>
    )
}

export default Fade;