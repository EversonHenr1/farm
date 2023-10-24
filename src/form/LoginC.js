
import styles from "./css/LoginC.module.css"
import responsive from  "./mobile/LoginCR.module.css"
import { FaUserAlt } from "react-icons/fa"
import Fade from "./Fade"
import bigode from "../img/bigode.png"

import Switchbtn from "../components/Switchbtn"
import { useState } from "react"
import Login from "./Login"
import Register from "./Register"


function LoginC ({off}){

    const [cadastro,setCadastro] = useState(false);

    const ligado = ()=>{
        setCadastro(!cadastro);

    }
    return(
        <Fade close={off} >
            <div className={`${styles.containerLogin} ${responsive.containerLoginR} ${!cadastro ? styles.show : styles.hidden}`}>
                <Switchbtn ligar={ligado}/>
                <img src={bigode} alt="bigode"/>
                {!cadastro ? <Login ligado={ligado}/> : <Register/>}
            </div>
        </Fade>
    )
}

export default LoginC