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

function Form({recipesData,handleSubmit}){

    const [numIgret,setNumIgret] = useState([1])
    const [numProceeding,setNumProceeding] = useState([1])
    const [image,setImage] = useState({})
    const [typesIngredients,setTypesIngredients] = useState([])
    const [recipes,setRecipes] = useState(recipesData || {})
    //Adicionar Options ao Select
    useEffect(()=>{
        fetch("http://localhost:5000/TypesIngredients",{
            method:"GET",
            header:{
                "Content-Type":"application/json"    
            }
        }).then((reps)=>reps.json()).then((data)=>{
            setTypesIngredients(data)
        }).catch((err)=>{console.log(err)})
    },[])

    //Adicionar Ingredientes
    function addIgret(){
        let adder = numIgret.length;
        
        adder = adder + 1;
        const adderArray = [...numIgret,adder]
        if(adder <= 30 ){
            setNumIgret(adderArray)
        }
    }
    //Receber objeto Dos Ingredientes
    function childrenObject(Ingredients,num){
        let Ingrediente = "Ingredient"+ num 
        setRecipes({...recipes, [Ingrediente]:{Ingredients}})
    } 
    //Receber objeto das Infos
    function childrenInfos(Info){
        let Infos = "Infos";
        setRecipes({...recipes,[Infos]:{Info}})
    }
    //Receber objeto dos Processos
    function childrenProceeding(Proceeding,num){
        let Processo = "Proceeding" + num
        setRecipes({...recipes,[Processo]:{Proceeding}})
        console.log(recipes)
    }
    
    //Adicionar dados do Input
    function handleChange(e){
        setRecipes({...recipes,[e.target.name]:e.target.value})
    }

    //Adicionar Procedimentos
    function addProcceding(){
        let adder = numProceeding.length;
        adder = adder + 1;
        
        const adderArray = [...numProceeding,adder]
        if(adder <= 30 ){
            setNumProceeding(adderArray)
        }
    }
    //Submit
    const submit = (e)=>{
        e.preventDefault()
        console.log(recipes)
        //handleSubmit(recipes)
    }


    const childrenImage =(Image)=>{ //Guardar a Imagem que será passada para uma API posteriormente
        setImage({"imagem" : Image})
        console.log(image)
    }

    return(
        <form onSubmit={submit}>
        <Container tipo="div" gaps="4em">
            
            <ImageUpload parentOBJ={childrenImage}/>
            <Input name="titulo" type="text"  text="Digite o Titulo da sua receita : " Change={handleChange}/>
            
            <TextAreaAutoHeight name="desc" text="Digite a descrição da sua receita :" change={handleChange}/>
            <TextAreaAutoHeight name="instruções" text="Digite as Instruções da sua receita :" change={handleChange}/> 
     
            <Infos parentInfos={childrenInfos}/>
        
            {numIgret.map((e,i,a)=>( //Adicionar componentes dos Ingredientes
                <Ingredients key={e} num={e} name1={ "ing"+e} name2={ "quantIng"+(e) } typesIngredients={typesIngredients}  sendObjectToParent={childrenObject} /> 
            ))} 

            {numProceeding.map((e,i,a)=>( //Adicionar componentes dos Procesos
                <Proceeding num={e} key={e} sendObjectToParent={childrenProceeding}/>
            ))}
        </Container>
        <Container tipo="div"  classAdicional2="center" top="50px" gaps="2em" margem="0px 1.5em">
            <Button text="+ Ingredientes +" class1="white"  click={addIgret}/>
            <Button text="+ Processos +" class1="white" click={addProcceding}/>
            <Submit name="enviarRecipe" text="Enviar receita" />
        </Container>
    </form>
    )
}

export default Form