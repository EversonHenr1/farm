import styles from "./css/Text.module.css"
function Text({children,align}){
    return(
        <p className={`${styles.text} ${styles[align]}`}>
            {children}
        </p>
    )
}

export default Text