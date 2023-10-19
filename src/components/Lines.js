import styles from  "./css/Lines.module.css"

function Lines({children}){
    return(
        
        <div className={styles.containerLines}> 
            <span className={styles.lines}></span>
                {children}
            <span className={styles.lines}></span>
        </div>
    )
}

export default Lines