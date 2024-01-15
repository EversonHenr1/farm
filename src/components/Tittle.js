import styles from "./css/Tittle.module.css"

function Tittle({text,cor,children,bottom}){
    const color = cor ? {color:cor} : {}
    const botto = bottom? {marginBottom: bottom} : {}

    return <h1 className={styles.tittle} style={{...color,...botto}}>{text}{children}</h1>
}

export default Tittle;