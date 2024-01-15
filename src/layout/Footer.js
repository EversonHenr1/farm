import styles from "./css/Footer.module.css"
import resposive from "./css/FooterR.module.css"
import logo from "../img/logo_transparent.png"
import {FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTiktok, FaTwitterSquare} from "react-icons/fa"
import { Link } from "react-router-dom"


function Footer({name}){
    return(
        <footer className={`${styles.footer} ${resposive.footerR}`}>
            <div>
                <img src={logo} alt="logo Farm"/>
            </div>
            <div>
                <h3>Paginas</h3>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    {name && <li><Link to="/myrecipes">Minhas Receitas</Link></li>}
                    <li><Link to="/allrecipes">Todas Receitas</Link></li>
                    {name &&  <li><Link to="/newrecipe">Criar Receitas</Link></li>}
                    {name &&  <li><Link to="/person">Meu Perfil</Link></li>}
                </ul>
            </div>
            <div>
                <h3>Redes Sociais</h3>
                <ul className={styles.containerRedes}>
                    <li> <a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a> </li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaTwitterSquare/></a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaTiktok/></a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagramSquare/></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer