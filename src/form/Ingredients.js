import { useState } from "react"
import SelectType from "../components/SelectType"
import DeleteButton from "../components/DeleteButton"
import Selections from "./Selections"
import styles from "./css/Ingredients.module.css"

function Ingredients({name1,num,name2,typesIngredients,IngredientsData,sendObjectToParent}){
    const [visualizedIngredient,setVisualizedIngredient] = useState(true)
    const [ingredients, setIngredients] = useState(IngredientsData  || {})

    function handleType(e){
        //Pega os dados do select quando for selecionados
        setIngredients({...ingredients,
           type:{
                id:e.target.options[e.target.selectedIndex].id,
                name:e.target.value
            }
        })
        handleParent() //Mandar para elemento pai
    }
    //Pegando dados do inputs
    function handleName(e){ //Adicionar Titulo ao objeto
        setIngredients({...ingredients,id:num,name:e.target.value})
        handleParent()
    }
    function handleQuant(e){ //Adicionar Quantidade ao objeto
        setIngredients({...ingredients,quantidade:e.target.value})
        handleParent()
    }
    function handleMed(e){  //Adicionar Medidas ao objeto
        setIngredients({...ingredients,medida:e.target.value})
        handleParent()
    }
    const handleParent = ()=>{ //Mandar objeto para o componente pai
        sendObjectToParent(ingredients,num)
    }
    const clickExcluir = ()=>{ //Excluir Ingrediente
        setVisualizedIngredient(false)
    }
    if(!visualizedIngredient){ // Se visualizedInfrediente for false não renderiza nada
        return null;
    }
    const measureTypes = [ //Opções de Medidas
        { id: "0", name: "Unidades", body: "(U)nidade"},
        { id: "1", name: "gramas", body: "g"},
        { id: "2", name: "quilogramas", body: "kg" },
        { id: "3", name: "miligramas", body: "mg" },
        { id: "4", name: "litros", body: "L" },
        { id: "5", name: "mililitros", body: "mL" },
        { id: "6", name: "colher de sopa", body: "colher(es)sopa" },
        { id: "7", name: "colher de chá", body: "colher(es)chá" },
        { id: "8", name: "xícara", body: "xícara(s)" },
        { id: "9", name: "copo", body: "copo(s)" },
        { id: "10", name: "pitada", body: "pitada(s)" },
      ];
      
    return(
        <div className={styles.container_Ingred}>

            <h3>{"Ingrediente  #"+num}</h3>
            <SelectType name={"SelectType" + num} options={typesIngredients} handleChange={handleType} value={ingredients.type ? ingredients.type.name:""}/>
            <div>
                <label htmlFor={name1}>Nome :</label>
                <input id={name1} name={name1} className={styles.ingredient} onChange={handleName} type="text" required/>
            </div>
            <div className={styles.quantContainer}>
                <div>
                    <label htmlFor={name2}>Quant : </label>
                    <input id={name2} name={name2} type="number" className={styles.quant} max="30" min ="1" onChange={handleQuant} required/>
                </div>
                <div>
                    <label htmlFor={"med"+name2}>Medida : </label>
                    <Selections change={handleMed} opcoes={measureTypes} value={ingredients.medida ? ingredients.medida :""}/>
                </div>
            </div>
            <DeleteButton click={clickExcluir}/>
        </div>
    )
}

export default Ingredients