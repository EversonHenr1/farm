import Input from "./Input"
import Submit from "./Submit"
import styles from "./css/Login.module.css"

function Login({ligado}){
    return(
        <>
            <h2>Fazer Login</h2>
                <form>
                    <Input type="email" text="Digite seu email" complete="email" name="email_Login" placeholder="Digite seu email" required="true"/>
                    <Input type="password" text="Digite sua senha" complete="current-password" name="senha_Login" required="true" placeholder="Digite sua senha"/> 
                    
                    <div  className={styles.containerbtn} >
                        <span onClick={ligado}>cadastrar-se</span>
                        <Submit color="darkred" name="submit_Login" text="Logar" />
                    </div>

                </form>
        </>
    )
}

export default Login;