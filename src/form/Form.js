import Button from "../components/Button"
import Container from "../components/Container"
import Ingredients from "./Ingredients"
import Input from "./Input"
import Proceeding from "./Proceeding"
import Submit from "./Submit"
import {useState,useEffect} from "react"
import TextAreaAutoHeight from "./TextAreaAutoHeight"
import Infos from "./Infos"
import ImageUpload from "../components/ImageUpload"
import styles from "./css/Form.module.css"

function Form({}){
    return(
        <div className={styles.containerForm}>
            <h2>Adicione Novas Receitas</h2>
            <form>
                <Input text="Insira o Titulo" type="text"/>
                <TextAreaAutoHeight text="Digite a Descrição " />
            </form>
        </div>
    )
}

export default Form