import { useRef, useState } from "react"
import Input from "./Input"
import Submit from "./Submit"
import styles from "./css/Login.module.css"
import axios from "axios"
import Cookies from "js-cookie"
import Button from "../components/Button"
import { FaUserAlt } from "react-icons/fa"

function Login({ligado,msg,msgOpen}){
    const [authToken,setAuthToken] = useState("")
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const emailInputRef = useRef(null); 
    const btnSubmitRef = useRef(null)

    const handleInput = (e)=>{
        if(e.target.name == "email_Login")
            setEmail(e.target.value)
        else
            setSenha(e.target.value)        
    }

    const handleLogin = (e)=>{ // Verificar o login
        e.preventDefault();
        btnSubmitRef.current.classList.add("loadingS")
        axios.post("/user/login",{ email:email, senha:senha})
        .then(response => {
            const tokens = response.data.token;
            Cookies.set('token',tokens, { expires: 1 });
            window.location.reload();
        })
        .catch(err => {
            msg({
                body:"Email ou senha Icorreto, Por gentileza tente novamente",
                title:"Login Incorreto"
            })
            msgOpen();
            setEmail("");
            setSenha("");
            emailInputRef.current.focus()
            btnSubmitRef.current.classList.remove("loadingS")
        }) 
    }
    return(
        <>
            <h2>Fazer Login</h2>
                <form onSubmit={handleLogin}>
                    <Input type="email" text="Digite seu email" complete="email" name="email_Login" placeholder="Digite seu email" required={true} Change={handleInput} value = {email} refs={emailInputRef}/>
                    
                    <Input type="password" text="Digite sua senha" complete="current-password" name="senha_Login" required={true} Change={handleInput} placeholder="Digite sua senha" value={senha} /> 
                    
                    <div  className={styles.containerbtn} >
                        <span onClick={ligado}>cadastrar-se</span>
                        <Button styleBtn="submit"  name="submit_Login" refs={btnSubmitRef}> Login <FaUserAlt/> </Button>
                    </div>

                </form>
        </>
    )
}

export default Login;