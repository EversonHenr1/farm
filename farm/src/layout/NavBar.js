import styles from "./css/NavBar.module.css"
import resposive from "./css/NavbarR.module.css"
import logo from "../img/logo_white.png"
import {useState } from "react"
import { Link } from "react-router-dom"


function NavBar({login,user,color}){


    const [menu,setMenu] = useState(false)
    const [bars,setBars] = useState(false)

    const shouldRenderMenu = menu && window.innerWidth < 1023;

    const menuResponsive = ()=>{
        setBars(!bars)
        setMenu(!menu)
    }
    return(
        <nav className={`${styles.nav} ${resposive.navR} ${styles[color]}`}>
                <div className={styles.containerLink}>
                    {user?(
                    <Link to="/user">
                        <span>{user}</span>
                    </Link>)
                    :(
                    <span onClick={login}>Fazer Login</span>
                    )}
                    <Link to="/">Inicio</Link>
                </div> 
                <div>
                    <div className={styles.hidden} onClick={menuResponsive}>
                        <div className={bars? resposive.barras : ""}/>
                        <div className={bars? resposive.barras : ""}/>
                        <div className={bars? resposive.barras : ""}/>
                    </div>
                    <Link to="/" ><img src={logo}  alt="Logo Farm"/></Link>
                </div>
                <div className={styles.containerLink}>
                    <Link to="/allrecipes">Descubra</Link>
                    <Link to="/myrecipes">Receitas</Link>
                </div>
                {shouldRenderMenu &&(
                    <div className={`${styles.hamburgue}`} >
                    <ul>
                        <li>{user?(
                    <Link to="/user">
                        <span>{user}</span>
                    </Link>)
                    :(
                    <span onClick={login}>Fazer Login</span>
                    )}</li>
                        <li style={{...color}}><Link to="/">Inicio</Link></li>
                        <li><Link to="/allrecipes">Descubra</Link></li>
                        <li><Link to="/myrecipes">Receitas</Link></li>
                    </ul>
                    </div>
                )}
        </nav>
    )
}

export default NavBar