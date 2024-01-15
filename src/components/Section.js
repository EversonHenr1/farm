import styles from "./css/Section.module.css"

function Section({children,image,gaps,color,flex,padding,backgroundContain}){

    const backgroundI = image ? {backgroundImage: `url(${image})`} : {};
    const backgroundC = color ? {backgroundColor:`#${color}`}: {};
    const paddingC = padding ? {padding:`${padding}`}: {};
    const gap  = gaps ? {gap:gaps} : {};

    return(
        <section 
        className={`${styles.section} ${styles[flex]} ${styles[backgroundContain]}`} 
        style={{...backgroundI, ...gap, ...backgroundC,...paddingC}}>
            {children}
        </section>
    )
}

export default Section;