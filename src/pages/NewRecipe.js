import Container from "../components/Container"
import Section from "../components/Section"
import  Form  from "../form/Form"
import background from "../img/background_fruts.png"
import styles from "./css/NewRecipe.module.css"

function NewRecipe({msg,fechar}){

  

    return(
        <Section flex="flex" padding="27em 0 13em 0"  image={background} backgroundContain="backgroundContainS">
                <div className={styles.image}><div></div></div>
                
                <Form msg={msg} fechar={fechar}/>
        </Section>
    )
}
export default NewRecipe