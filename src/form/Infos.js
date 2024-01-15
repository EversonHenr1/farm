import { FaAlgolia,FaBookOpen,FaUtensils } from "react-icons/fa"
import Container from "../components/Container"
import Selections  from "./Selections"
import { useState } from "react"
import styles from "./css/Infos.module.css"

function Infos({parentInfos}){
    const [Infos,setInfos] = useState({}) //Objeto que será passado para receita

    const tempo = [ // Objeto com as propriedades do selection de tempo
        {id:"0",body:"15min"},
        {id:"1",body:"30min"},
        {id:"2",body:"45min"},
        {id:"3",body:"1Horas"},
        {id:"4",body:"1h30min"},
        {id:"5",body:"2Horas"},
        {id:"6",body:"2h30min"},
        {id:"7",body:"3Horas"},
        {id:"8",body:"+3Horas"},
    ]
    const dificuldade =[ // Objeto com as propriedades do selection de dificuldade
        {id:"0",body:"Muito Simples"},
        {id:"1",body:"Simples"},
        {id:"2",body:"Mediano"},
        {id:"3",body:"Complexo"},
        {id:"4",body:"Muito Complexo"}
    ]
    const porcoes =[ //Objeto com as propriedades do selection da quantidade de porções
        {id:"0",body:"1 a 2"},
        {id:"1",body:"3 a 5"},
        {id:"2",body:"6 a 10"},
        {id:"3",body:"10 a 20"},
        {id:"4",body:"20 a 50"}
    ]
    function handleChange(e){
        let ide = e.target.name;
        ide = "id" + ide
        setInfos({...Infos,[e.target.name]:e.target.value , [ide]:e.target.options.selectedIndex-1})
        handleParent()
    }
    function handleParent(){
        parentInfos(Infos)
    }
    return(
        <div className={styles.containerInfos}>
            <Container tipo="div" classAdicional="flex" classAdicional2="center">
                <Container tipo="div" classAdicional2="vertical">
                <label htmlFor="Timer">Tempo</label>
                    <FaAlgolia/>
                    <Selections change={handleChange} opcoes={tempo} name="Timer" value={Infos.Timer ? Infos.Timer :""}/>
                </Container>
                <Container tipo="div" classAdicional2="vertical">
                <label htmlFor="Dificuldade">Dificuldade</label>
                    <FaBookOpen/>
                    <Selections opcoes={dificuldade} name="Dificuldade" change={handleChange} value={Infos.Dificuldade ? Infos.Dificuldade :""}/>
                </Container>
                <Container tipo="div" classAdicional2="vertical">
                    <label htmlFor="quantidade">Porções</label>
                    <FaUtensils/>
                    <Selections opcoes={porcoes} name="quantidade" change={handleChange} value={Infos.quantidade ? Infos.quantidade:""}/>
                </Container>
            </Container>
        </div>
    )
}
export default Infos