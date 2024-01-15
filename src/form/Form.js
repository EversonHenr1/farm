import styles from "./css/Form.module.css"
import Button from "../components/Button"
import Ingredients from "./Ingredients"
import Input from "./Input"
import Proceeding from "./Proceeding"
import TextAreaAutoHeight from "./TextAreaAutoHeight"
import { FaArrowDown, FaCarrot, FaFire, FaRegClock, FaUtensils } from "react-icons/fa"
import Selections from "./Selections"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { useRef } from "react"

function Form({fechar,msg}){ 
    const [valueTitulo,setValueTitulo] = useState("")
    const [valueDesc,setValueDesc] = useState("")
    const [valueTime,setValueTime] = useState("")
    const [valuePorcoes,setValuePorcoes] = useState("")
    const [valueDificuldade,setValueDificuldade] = useState("")
    const [valueImgUrl,setValueImgUrl] = useState("")
    const [optionsIngredientes,setOptionsIngredientes] = useState([])
    const [valueIngrediente,setValueIngrediente] = useState([{}])
    const [valueProcedimentos,setValueProcedimentos] = useState([{}]);

    useEffect(()=>{
         axios.get("/ingredient").then(
            response =>{
                let list = response.data.response
                let updatedOptions = list.map(item => ({
                    id: item.id_ingredientes,
                    body: item.nome,
                    medida:item.medida
                  }));
                setOptionsIngredientes(updatedOptions)
            }
        ).catch(err=>console.log(err))
    },[])

    const optionsTime = [{id:"5min", body:"5 minutos"},{id:"15min", body:"15 minutos"},
    {id:"30min", body:"30 minutos"},{id:"45min", body:"45 minutos"},{id:"1h", body:"1 hora"},
    {id:"1h30min", body:"1h e 30 minutos"},{id:"2h", body:"2 horas"}, {id:"mais3horas", body:"mais que 2 horas"}]

    const optionsPorçoes = [{id:"1porção", body:"1 porção"},{id:"1a3porções", body:"1 a 3 porções"},
    {id:"3a5porções", body:"3 a 5 porções"},{id:"5a7porções", body:"5 a 7 porções"},
    {id:"10oumaisporções", body:"10 ou mais porções"}]

    const optionsDificuldade =[{id:"Facil",body:"Facil"},{id:"Mediana",body:"Mediana"},{id:"Dificil",body:"Dificil"}]

    const handleInput = (e)=>{
        const value = e.target.value;
        const name = e.target.name;
        switch(name){
            case "inpTitulo":
                setValueTitulo(value)
                break;
            case "inpDesc":
                setValueDesc(value)
                break;
            case "inpImg":
                setValueImgUrl(value)
                break;
        }
    }
    const handleSelect = (e)=>{
        const value = e.target.value;
        const name = e.target.name;
        switch(name){
            case "selectTime":
                setValueTime(value);
                break;
            case "selectPorcoes":
                setValuePorcoes(value);
                break;
            case "selectDificuldade":
                setValueDificuldade(value);
                break;
        }
    }
    function removerIngrediente(array) {
        return array.map(item => {
          const { ingrediente, ...resto } = item; 
          return resto; 
        });
      }
    const handleSubmit = (e)=>{
        e.preventDefault();
        refButton.current.classList.add("loading")

        const isValid = validation();
       if(isValid){
        const ingredientes = removerIngrediente(valueIngrediente);
        const request = {
            titulo: valueTitulo,
            descricao:valueDesc,
            porcoes:valuePorcoes,
            tempo:valueTime,
            dificuldade:valueDificuldade,
            img:valueImgUrl,
            procedimentos:valueProcedimentos,
            ingredientes:ingredientes
        }
        axios.post("/recipe",request).then((data)=>{
            msg({title:"Sucess!",body:data.data.mensage})
            fechar();
            clean();
        }).catch(err=>{
            msg({title:"Erro!",body:err})
            fechar();
        })  
       }else{
            refButton.current.classList.remove("loading")
       }
    }
    const clean = ()=>{
        setValueDesc("");
        setValueDificuldade("");
        setValueImgUrl("");
        setValuePorcoes("");
        setValueTime("");
        setValueTitulo("");
        refButton.current.classList.remove("loading")
    }
    const validation = function(){
        let validacao = false;
        if (valueTitulo.trim().length === 0) 
            msg({ title: "Validação", body: "Campo título vazio" });
        else if (!/^[a-zA-Z\s]+$/.test(valueTitulo)) 
            msg({ title: "Validação", body: "O título não pode conter números ou caracteres especiais" });
        else if (valueImgUrl.trim().length === 0) 
            msg({ title: "Validação", body: "Campo URL de imagem vazio" });
        else if (!/\.(jpg|jpeg|png|gif|webp)$/i.test(valueImgUrl)) 
            msg({ title: "Validação", body: "A URL fornecida não é uma imagem válida" });
        else if (valueDesc.trim().length === 0) 
            msg({ title: "Validação", body: "Campo descrição vazio" });
        else if (valueTime === "") 
            msg({ title: "Validação", body: "Selecione o tempo" });
        else if (valueDificuldade === "") 
            msg({ title: "Validação", body: "Selecione a dificuldade" });
        else if (valuePorcoes === "") 
            msg({ title: "Validação", body: "Selecione o número de porções" });
        else
            validacao = true;  

        if (!validacao)
        fechar();

        return validacao;
    }
    const atualizarListaIngrediente = () =>{
        setValueIngrediente([...valueIngrediente,{}])
    }
    const removeItemListIngrediente = (index) =>{
        let novaLista = valueIngrediente.slice(0, index).concat(valueIngrediente.slice(index + 1));
        setValueIngrediente(novaLista)
    }
    const atualizarValueIngrediente = (e,num) =>{
        const selectedIndex = e.target.selectedIndex;
        const option = e.target.options[selectedIndex];
        const med = option.getAttribute('medida');

        setValueIngrediente((antigaLista) => {
            const novoLista = [...antigaLista]; 
            novoLista[num] = { ...novoLista[num], ingrediente: e.target.value,id_ingrediente:e.target.value.replace(/\D/g, ''),medida:med }; 
            return novoLista; 
        }); 
    }
    const atualizarValueQuantidade = (e,num) =>{
        setValueIngrediente((antigaLista) => {
            const novoLista = [...antigaLista]; 
            novoLista[num] = { ...novoLista[num], quantidade: e.target.value }; 
            return novoLista; 
        }); 
    }
    const removerValueProcedimento = (index)=>{
        let novaLista = valueProcedimentos.slice(0, index).concat(valueProcedimentos.slice(index + 1));
        setValueProcedimentos(novaLista)
    }
    const handleProcedimento = (e,num)=>{
        setValueProcedimentos((antigaLista) => {
            const novoLista = [...antigaLista]; 
            novoLista[num] = { ...novoLista[num], body:e.target.value};
            return novoLista;
        }); 
    }
    const adderProcedimento = ()=>{
        setValueProcedimentos([...valueProcedimentos,{}])
    }
    const refButton = useRef(null)
   
   

    return(
        <div className={styles.containerForm}>
            <h2>Adicione Novas Receitas</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.containerImagem}>
                    <img className={styles.imgRecipe} src={valueImgUrl || null} />
                    {!valueImgUrl && <div><FaArrowDown/><p>coloque uma URL abaixo para adicionar uma imagem a sua receita</p></div>}
                </div>
                <Input  text="URL de imagem publica" name="inpImg" value={valueImgUrl} Change={handleInput}/>
                <Input text="Insira o Titulo"  type="text" name="inpTitulo"  Change={handleInput}  value={valueTitulo}/>
                <TextAreaAutoHeight text="Digite a Descrição" name="inpDesc"  value={valueDesc} change={handleInput} />
                <div className={styles.flexDicas}>
                    <div>
                        <FaRegClock/>
                        <Selections change={handleSelect} value={valueTime} opcoes={optionsTime} name="selectTime"/>
                    </div>
                    <div>
                        <FaUtensils/>
                        <Selections change={handleSelect} value={valueDificuldade} name="selectDificuldade" opcoes={optionsDificuldade}/>
                    </div>
                    <div>
                        <FaCarrot/>
                        <Selections change={handleSelect} value={valuePorcoes} name="selectPorcoes"   opcoes={optionsPorçoes}/>
                    </div>
                </div>
                {valueIngrediente.map((item,index)=> (
                     <Ingredients 
                     plus={atualizarListaIngrediente} 
                     changeInput={(e)=> atualizarValueQuantidade (e,index)} 
                     changeSelect={(e)=> atualizarValueIngrediente (e,index)} 
                     options={optionsIngredientes}  
                     value={item}  
                     click={() => removeItemListIngrediente(index)} 
                     sel = {true}
                     num={index+1}  
                     key={"ing" + index}
                     medida={item.medida}
                     />
                ))} 
                {valueProcedimentos.map((item,index)=>(
                    <Proceeding 
                    num={index + 1} 
                    key={index + 1}
                    value={item}
                    change={ (e)=> handleProcedimento(e,index)}
                    remove={ () => removerValueProcedimento(index)}
                    add={adderProcedimento}
                    />
                ))}
                <Button refs={refButton} ><FaFire/> Salvar <FaFire/></Button>
            </form>
        </div>
    )
}
export default Form