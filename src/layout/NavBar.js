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

    const userFormatado = typeof user === 'string' && user.length > 10
    ? user.split(" ")[0]
    : user;  

    return(
        <nav className={`${styles.nav} ${resposive.navR} ${styles[color]}`}>
                <div className={styles.containerLink}>
                    {user?(
                    <Link to="/person">
                        <span>{userFormatado}</span>
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
                    {user ? <Link to="/myrecipes">Receitas</Link> :  <a href="#" onClick={login}>Receitas</a> }

                </div>
                {shouldRenderMenu &&(
                    <div className={`${styles.hamburgue}`} >
                    <ul>
                        <li>{user?(
                    <Link to="/person">
                        <span>{user}</span>
                    </Link>)
                    :(
                    <span onClick={login}>Fazer Login</span>
                    )}</li>
                        <li style={{...color}}><Link to="/">Inicio</Link></li>
                        <li><Link to="/allrecipes">Descubra</Link></li>
                        <li>{user ? <Link to="/myrecipes">Receitas</Link> :  <span onClick={login}>Receitas</span> }</li>
                    </ul>
                    </div>
                )}
        </nav>
    )
}

export default NavBar