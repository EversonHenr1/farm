import Infos from "../components/Infos";
import Section from "../components/Section";
import styles from "./css/Recipe.module.css";
import { FaCarrot, FaFire, FaFireAlt, FaRegClock, FaUtensils,FaThumbsUp,FaThumbsDown, FaCookie} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import MenssagerOptions from "../components/MenssagerOptions";
import Input from "../form/Input";
import TextAreaAutoHeight from "../form/TextAreaAutoHeight";
import Selections from "../form/Selections";



function Recipe({mensagem,fechar}){
    const [id,setID] = useState(useParams("idRecipe"));
    const [titulo,setTitulo] = useState(null);
    const [imgUrl,setImgUrl] = useState(null);
    const [time,setTime] = useState(null);
    const [porcao,setPorcao] = useState(null);
    const [dificuldade,setDificuldade] = useState(null);
    const [desc,setDesc] = useState(null);
    const [listProcedimento,setListProcedimento] = useState(null);
    const [listIngredientes,setListIngredientes] = useState(null);
    const [iconesDificuldade,setIconesDificuldade] = useState(null);
    const [userID,setUserID] = useState(null);
    const [usuarioValido,setUsuarioValido] = useState(false);
    const [hide,sethide] = useState(false)
    const [msg,setMsg] = useState({title:"Excluir Receita",body:"Deseja Excluir essa Receita"});
    const [tituloValue,setTituloValue] = useState(null)
    const [descValue,setDescValue] = useState(null)
    const [imgUrlValue,setImgUrlValue] = useState(null);
    const [valueTime,setValueTime] = useState("")
    const [valuePorcoes,setValuePorcoes] = useState("")
    const [valueDificuldade,setValueDificuldade] = useState("")
    const [autor,setAutor] = useState(null)
    const [like,setLike] = useState(null)
    const [desLike,setDesLike] = useState(null)


    useEffect(()=>{
        axios.get(`/recipe/${id.idRecipe}`).then(
        (response)=>{
            console.log(response);
            const result = response.data.response[0]
            setTitulo(result.titulo);
            setImgUrl(result.img_url);
            setTime(result.tempo);
            setPorcao(result.porcoes);
            setDificuldade(result.dificuldade);
            setDesc(result.descricao);
            setListProcedimento(result.procedimentos)
            setListIngredientes(result.ingredientes)
            setUserID(result.id_usuarios);
            setTituloValue(result.titulo);
            setDescValue(result.descricao);
            setImgUrlValue(result.img_url);
            setValueTime(result.tempo);
            setValuePorcoes(result.porcoes);
            setValueDificuldade(result.dificuldade);
            setAutor(result.usuario.nome);
            setLike(result.like);
            setDesLike(result.deslike);
        }
        ).catch(err=>console.log(err))

       
    },[])

    useEffect(()=>{
        switch(dificuldade){
            case "Facil":
                setIconesDificuldade([1,0,0])
                break;
            case "Mediana":
                setIconesDificuldade([1,1,0])
                break;
            case "Dificil":
                setIconesDificuldade([1,1,1])
                break;
        } 
        const id = parseInt( sessionStorage.getItem("idUSer"))
        if(id == userID)
            setUsuarioValido(true)
    },[dificuldade])
    
    const toggleMsgOption = ()=>{
        sethide(!hide);
    }
    const excluirReceita = ()=>{
         const meuid = parseInt(id.idRecipe)
        console.log(meuid);
        axios.delete(`/recipe/${meuid}`).then(()=>{
            toggleMsgOption()
            mensagem({body:"Sua Receita Foi excluida com sucesso!",title:"Receita Excluida "})
            fechar();
            setTimeout(()=>{
                window.location.href = "http://localhost:3000/myrecipes"
            },1000)
            
        }).catch(err=>console.log(err))
    } 
    const AlterarReceita = ()=>{
        const meuid = parseInt(id.idRecipe)
        const request =
        {
            titulo:tituloValue,
            id_receitas:meuid,
            porcoes:valuePorcoes,
            tempo:valueTime,
            descricao:descValue,
            dificuldade:valueDificuldade,
            url:imgUrlValue
        }
        axios.put("/recipe",request).then((response)=>{
            mensagem({body:"receita Alterada com sucesso!",title:"Receita Alterada "})
            fechar();
            setTimeout(()=>{
                window.location.href = "http://localhost:3000/recipe/"+meuid
            },1000)
        }).then(err=>console.log(err))
    }
    
    const optionsPorçoes = [{id:"1porção", body:"1 porção"},{id:"1a3porções", body:"1 a 3 porções"},
    {id:"3a5porções", body:"3 a 5 porções"},{id:"5a7porções", body:"5 a 7 porções"},
    {id:"10oumaisporções", body:"10 ou mais porções"}]

     const optionsTime = [{id:"5min", body:"5 minutos"},{id:"15min", body:"15 minutos"},
    {id:"30min", body:"30 minutos"},{id:"45min", body:"45 minutos"},{id:"1h", body:"1 hora"},
    {id:"1h30min", body:"1h e 30 minutos"},{id:"2h", body:"2 horas"}, {id:"mais3horas", body:"mais que 2 horas"}]
    
    const optionsDificuldade =[{id:"Facil",body:"Facil"},{id:"Mediana",body:"Mediana"},{id:"Dificil",body:"Dificil"}]
    
    const handleInput = (e)=>{
        const value = e.target.value;
        const name = e.target.name;
        switch(name){
            case "inpTitulo":
                setTituloValue(value)
                break;
            case "inpDesc":
                setDescValue(value)
                break;
            case "inpImg":
                setImgUrlValue(value)
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
    const handleLike = (e)=>{
        atualizarLike();
    }
    const handleDesLike = (e)=>{
        console.log("deslike")
    }
    const atualizarLike = ()=>{
        const request = {
            like:like+1,
            deslike:desLike+1
        }
        axios.patch(`like/${id.idRecipe}`,request).then((r)=>{
            atualizarViewLike();
            
        }).catch((err)=>{console.log(err)});
    }

    const atualizarViewLike = (like)=>{
        setLike(like+1);
        setDesLike(desLike+1)
    }
    return(
       
        <Section color="F9F9F9" >
            {hide && <MenssagerOptions fechar={toggleMsgOption} msg={msg} ok={excluirReceita}/>}
            <div className={styles.backgroundBanner} />
            <div className={styles.containerMain}>
                <div className={styles.containerImage}>
                    <img src={imgUrl}/>
                </div>
                
                <h1>{titulo}</h1>
               
                <div className={styles.containerInfo}>
                    <Infos>{time}</Infos>
                    <Infos>{iconesDificuldade!=null && iconesDificuldade.map((item,index) => (
                        item == 1 ? <FaFire key={index}/>  : <FaFireAlt key={index}/>  
                    ))} </Infos>
                    <Infos>{porcao}</Infos>
                </div>
                <h2 className={styles.autor}>{autor}<FaCookie/></h2>
                {/* <div  className={styles.containerLike}>
                    <p><FaThumbsUp onClick={handleLike}/> - {like}</p>
                   <p><FaThumbsDown onClick={handleDesLike}/> - {desLike}</p> 
                </div> */}
                <div className={styles.descC}>
                    <p>{desc}</p>
                </div> 
               
            </div>

            <article className={styles.containePlus}>
                <aside>
                <div className={styles.containerProcedimentos}>
                        <h2>Procedimentos</h2>
                    <div className={styles.procedimento}>
                        
                    { listProcedimento != null && listProcedimento.map((item,index)=> (
                    <div key={"procedimento"+index}>
                        <span>{index + 1}</span>
                        <div><p>{item.body}</p></div>
                    </div>))}
                    </div>
                </div>
                </aside>
                <aside>
                <div className={styles.containerIngrediente}>
                <h2>Ingredientes</h2>
                    <div className={styles.ingrediente}>
                        
                    <ul>
                        {listIngredientes != null && listIngredientes.map((item,index)=> (
                           <li key={"ingrediente"+index}> <span>{item.quantidade} {item.medida}</span> <p>{item.nome}</p></li>
                        ))}
                    </ul>

                    </div>
                </div>
                
                </aside>
               
            </article>
            {usuarioValido && (
                <>
                <div className={styles.containerEdit}>
                    <h2>Alterar Receita</h2>
                    <img src={imgUrlValue} className={styles.imgRecipe}  />
                    <Input  name="inpImg" Change={handleInput} text={"url Imagem"}  value={imgUrlValue}/>
                    <Input   name="inpTitulo"  Change={handleInput} text={"Titulo"} value={tituloValue}/>
                    <TextAreaAutoHeight name="inpDesc" change={handleInput}  text={"Descrição"} value={descValue}/>
                
                <div className={styles.flexDicas}>
                        <div>
                            <FaRegClock/>
                            <Selections change={handleSelect} opcoes={optionsTime} name="selectTime" value={valueTime}/>
                        </div>
                        <div>
                            <FaUtensils/>
                            <Selections change={handleSelect} name="selectDificuldade" opcoes={optionsDificuldade} value={valueDificuldade}/>
                        </div>
                        <div>
                            <FaCarrot/>
                            <Selections  change={handleSelect} name="selectPorcoes"   opcoes={optionsPorçoes} value={valuePorcoes}/>
                        </div>
                        
                </div>
                <Button click={AlterarReceita}>Alterar</Button>
                </div>
                <div className={styles.containerEX}>
                {usuarioValido && (<Button click={toggleMsgOption}>Excluir</Button>)}
                </div>
            </>
            )}
            
            
        </Section>
    )
}

export default Recipe;