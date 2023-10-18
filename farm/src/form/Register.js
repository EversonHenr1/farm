import Input from "./Input"
import Submit from "./Submit"

import styles from "./css/Register.module.css"

function Register(){
    return(
        <>
            <h2>Cadastre-se</h2>
            <form>
                <Input type="text" text="Digite seu nome " complete="name" name="name_cadastro" placeholder="Digite seu nome " required="true"/>

                <Input type="email" text="Digite seu email" complete="email" name="email_cadastro" placeholder="Digite seu email" required="true"/>
                <Input type="email" text="Confirme seu email"  name="email_confim_cadastro" placeholder="Confirme seu email" required="true"/>
                
                <Input type="password" text="Digite sua senha" complete="current-password" name="senha_cadastro" required="true" placeholder="Digite sua senha"/>
                <Input type="password" text="Confirme sua senha" name="senha_confim_cadastro" required="true" placeholder="Confirme sua senha"/> 
                

                <div className={styles.containerbtn} >
                    <Submit color="darkred" name="submit_cadastro" text="Cadastrar-se" />
                </div>
            </form>
        </>
    )
}

export default Register