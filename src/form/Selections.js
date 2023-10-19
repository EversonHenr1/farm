function Selections({opcoes,change,name,value}){
   
    return(
        <select onBlur={change} onChange={change} name={name} id={name}  value={value||""}>
            <option disabled value="">selecione..</option>
            {
                opcoes ? opcoes.map((element)=>(
                    <option id={element.id} value={element.body} key={element.id}>{element.body}</option>
                )) : 
                (<option>Sem opções</option>)
            }
        </select>
    )
}
export default Selections