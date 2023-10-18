import Container from "../components/Container"
import Tittle from "../components/Tittle"
import { useNavigate } from "react-router-dom"
import  Form  from "../form/Form"


function NewRecipe(){

    const history = useNavigate()
    
    function createRecipe(recipes){
        fetch("http://localhost:5000/recipes",{ //Fazer o post do objeto Recipes
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify(recipes)
        }).then((reps)=>reps.json()).then((data)=>{
            console.log(data)
            //Redirecionar uma messagem com Sucesso
            history("/myrecipes",{state:"Receita Criada com sucesso!"})
        }).catch(err=>console.log(err))
    } 

    return(
        <Container classAdicional="flex" classAdicional2="center" >
            <Container tipo="div" classAdicional3="glass" classAdicional="center" classAdicional2="vertical" margem="5em 0px">
                <Tittle text="Adicionar Receitas" cor="white" bottom="3.5em"/>
                <Form handleSubmit={createRecipe}/>
            </Container>
        </Container>
    )
}
export default NewRecipe